import os
import re

app_dir = r"d:\ayati\sarvata\app"

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file in ["page.js", "page.jsx", "page.ts", "page.tsx"]:
            file_path = os.path.join(root, file)
            
            # Calculate route
            rel_dir = os.path.relpath(root, app_dir)
            if rel_dir == ".":
                route = "/"
            else:
                route = "/" + rel_dir.replace("\\", "/")
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Check if alternates already exist to avoid duplicate
            if "alternates:" in content and "canonical:" in content:
                continue

            # Check if metadata exists
            if "export const metadata" in content:
                # Add alternates to existing metadata
                content = re.sub(
                    r"(export const metadata\s*=\s*\{)",
                    r"\1\n  alternates: { canonical: '" + route + "' },",
                    content
                )
            else:
                # Find where to insert (before export default)
                metadata_str = f"\nexport const metadata = {{\n  alternates: {{ canonical: '{route}' }},\n}};\n\n"
                
                # Insert before export default
                if "export default" in content:
                    content = re.sub(r"(export default)", metadata_str + r"\1", content, count=1)
                else:
                    content += metadata_str

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            
print("Canonical URLs added to all pages.")
