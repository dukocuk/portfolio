// ============================================================
// SKILLS — grouped panels of tag chips.
// ============================================================

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { category: 'Software Development', skills: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'AL', 'C / C++'] },
  { category: 'Frontend Development', skills: ['React', 'HTML5', 'CSS', 'SCSS'] },
  { category: 'Backend Development', skills: ['Node.js', '.NET', 'REST API'] },
  { category: 'Mobile Development', skills: ['Xamarin', 'Flutter', 'C#'] },
  { category: 'Databases', skills: ['SQL', 'MySQL', 'MariaDB'] },
  { category: 'Integration & Networking', skills: ['API Integration', 'Service Bus', 'TCP/IP', 'UDP', 'SSH'] },
  { category: 'Security', skills: ['Access Control', 'Authentication', 'Network Security', 'Data Integrity'] },
  { category: 'Tools & Methods', skills: ['Git', 'Jira', 'Bitbucket', 'Agile', 'Scrum', 'Testing', 'Debugging', 'Documentation'] },
  { category: 'Communication & Teaching', skills: ['Technical Documentation', 'Teaching (DTU)', 'Stakeholder Communication'] },
];

export type Language = { name: string; level: string };

export const languages: Language[] = [
  { name: 'Danish', level: 'Native' },
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
];
