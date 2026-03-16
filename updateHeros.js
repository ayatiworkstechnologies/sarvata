const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  "app/services/for-educators/free-resources-tools/page.jsx",
  "app/services/for-educators/teacher-mentoring/page.jsx",
  "app/services/for-educators/workshops-training/page.jsx",
  "app/services/for-leaders/faculty-leadership-mentoring/page.jsx",
  "app/services/for-leaders/inclusion-audits-roadmaps/page.jsx",
  "app/services/for-leaders/strategic-planning-systems/page.jsx",
  "app/services/for-leaders/student-programs/cyber-safety-digital-citizenship/page.jsx",
  "app/services/for-leaders/student-programs/healthy-relationships-boundaries/page.jsx",
  "app/services/for-leaders/student-programs/mental-health-well-being/page.jsx",
  "app/services/for-leaders/student-programs/page.jsx",
  "app/services/for-parents/for-your-child/page.jsx",
  "app/services/for-parents/for-your-child/understanding-how-your-child-learns/page.jsx",
  "app/services/for-parents/insights-guidance/page.jsx",
  "app/services/for-parents/parent-workshops/page.jsx",
  "app/services/for-parents/school-partnership-advocacy/page.jsx"
];

const basePath = "d:/Ayathiwork/2026/sarvata";

filesToUpdate.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log("File not found", filePath);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace import
  content = content.replace(/import\s+MainHero\s+from\s+["']@\/components\/MainHero["'];/g, 'import InnerHero from "@/components/InnerHero";');
  
  // Replace component and remove image props
  content = content.replace(/<MainHero([\s\S]*?)\/>/g, (match, props) => {
    let newProps = props.replace(/webImage=(["']).*?\1\s*/g, '');
    newProps = newProps.replace(/mobileImage=(["']).*?\1\s*/g, '');
    return `<InnerHero${newProps}/>`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log("Updated", file);
});
