const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            if (file.endsWith('page.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const servicesDir = path.join(process.cwd(), 'app', 'services');
const files = getFiles(servicesDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if it uses framer-motion but lacks "use client"
    if (content.includes('framer-motion') && !content.trim().startsWith('"use client"') && !content.trim().startsWith("'use client'")) {
        console.log(`Fixing ${file}`);
        
        let newContent = '"use client";\n' + content;
        
        // Extract metadata if present
        const metadataRegex = /export const metadata = \{[\s\S]*?\};/g;
        const match = content.match(metadataRegex);
        
        if (match) {
            const metadata = match[0];
            const dir = path.dirname(file);
            const layoutFile = path.join(dir, 'layout.jsx');
            
            // Remove metadata from page.jsx
            newContent = newContent.replace(metadata, '');
            
            // Create layout.jsx with metadata
            if (!fs.existsSync(layoutFile)) {
                const layoutContent = `${metadata}\n\nexport default function Layout({ children }) {\n  return <>{children}</>;\n}\n`;
                fs.writeFileSync(layoutFile, layoutContent);
                console.log(`Created layout.jsx for ${dir}`);
            } else {
                console.log(`Layout already exists for ${dir}, manual check might be needed for metadata merge.`);
            }
        }
        
        fs.writeFileSync(file, newContent);
    }
});
