const fs = require('fs');
const path = require('path');

const mappings = {
  "app/services/for-educators/free-resources-tools/page.jsx": "resources",
  "app/services/for-educators/teacher-mentoring/page.jsx": "mentoring",
  "app/services/for-educators/workshops-training/page.jsx": "mentoring",
  "app/services/for-leaders/faculty-leadership-mentoring/page.jsx": "mentoring",
  "app/services/for-leaders/inclusion-audits-roadmaps/page.jsx": "planning",
  "app/services/for-leaders/strategic-planning-systems/page.jsx": "planning",
  "app/services/for-leaders/student-programs/cyber-safety-digital-citizenship/page.jsx": "digital",
  "app/services/for-leaders/student-programs/healthy-relationships-boundaries/page.jsx": "advocacy",
  "app/services/for-leaders/student-programs/mental-health-well-being/page.jsx": "mental-health",
  "app/services/for-leaders/student-programs/page.jsx": "mental-health",
  "app/services/for-parents/for-your-child/page.jsx": "mental-health",
  "app/services/for-parents/for-your-child/understanding-how-your-child-learns/page.jsx": "planning",
  "app/services/for-parents/insights-guidance/page.jsx": "planning",
  "app/services/for-parents/parent-workshops/page.jsx": "mentoring",
  "app/services/for-parents/school-partnership-advocacy/page.jsx": "advocacy"
};

const basePath = "d:/Ayathiwork/2026/sarvata";

Object.entries(mappings).forEach(([file, variant]) => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log("File not found", filePath);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update InnerHero call to include variant
  // Search for <InnerHero ... />
  content = content.replace(/<InnerHero([\s\S]*?)\/>/g, (match, props) => {
    // Check if variant already exists (unlikely given prev turns)
    if (props.includes('variant=')) {
        return match.replace(/variant=(["']).*?\1/g, `variant="${variant}"`);
    } else {
        // Insert variant before the closing breadcrumbs or at the end
        return `<InnerHero${props} variant="${variant}" />`;
    }
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Applied variant "${variant}" to ${file}`);
});
