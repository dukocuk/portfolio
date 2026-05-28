// ============================================================
// SKILLS — grouped panels of tag chips. Localized: Danish (default) + English.
// Skill tag names stay neutral; only category names and language levels translate.
// ============================================================

import type { Lang } from '../i18n/config';

export type SkillGroup = { category: string; skills: string[] };

export const skillGroupsContent: Record<Lang, SkillGroup[]> = {
  da: [
    { category: 'Softwareudvikling', skills: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'AL', 'C / C++'] },
    { category: 'Frontend-udvikling', skills: ['React', 'HTML5', 'CSS', 'SCSS'] },
    { category: 'Backend-udvikling', skills: ['Node.js', '.NET', 'REST API'] },
    { category: 'Mobiludvikling', skills: ['Xamarin', 'Flutter', 'C#'] },
    { category: 'Databaser', skills: ['SQL', 'MySQL', 'MariaDB'] },
    { category: 'Integration & netværk', skills: ['API Integration', 'Service Bus', 'TCP/IP', 'UDP', 'SSH'] },
    { category: 'Sikkerhed', skills: ['Access Control', 'Authentication', 'Network Security', 'Data Integrity'] },
    { category: 'Værktøjer & metoder', skills: ['Git', 'Jira', 'Bitbucket', 'Agile', 'Scrum', 'Testing', 'Debugging', 'Documentation'] },
    { category: 'Kommunikation & undervisning', skills: ['Technical Documentation', 'Teaching (DTU)', 'Stakeholder Communication'] },
  ],
  en: [
    { category: 'Software Development', skills: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'AL', 'C / C++'] },
    { category: 'Frontend Development', skills: ['React', 'HTML5', 'CSS', 'SCSS'] },
    { category: 'Backend Development', skills: ['Node.js', '.NET', 'REST API'] },
    { category: 'Mobile Development', skills: ['Xamarin', 'Flutter', 'C#'] },
    { category: 'Databases', skills: ['SQL', 'MySQL', 'MariaDB'] },
    { category: 'Integration & Networking', skills: ['API Integration', 'Service Bus', 'TCP/IP', 'UDP', 'SSH'] },
    { category: 'Security', skills: ['Access Control', 'Authentication', 'Network Security', 'Data Integrity'] },
    { category: 'Tools & Methods', skills: ['Git', 'Jira', 'Bitbucket', 'Agile', 'Scrum', 'Testing', 'Debugging', 'Documentation'] },
    { category: 'Communication & Teaching', skills: ['Technical Documentation', 'Teaching (DTU)', 'Stakeholder Communication'] },
  ],
};

export type Language = { name: string; level: string };

export const languagesContent: Record<Lang, Language[]> = {
  da: [
    { name: 'Dansk', level: 'Modersmål' },
    { name: 'Tyrkisk', level: 'Modersmål' },
    { name: 'Engelsk', level: 'Professionelt arbejdsniveau' },
  ],
  en: [
    { name: 'Danish', level: 'Native' },
    { name: 'Turkish', level: 'Native' },
    { name: 'English', level: 'Professional working proficiency' },
  ],
};
