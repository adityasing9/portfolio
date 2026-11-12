import {
  ProjectFilterCategory,
  ProjectItem,
  SkillCategoryName,
  SkillItem,
  PERSONAL_CONFIG,
  PROJECTS,
  TECHNICAL_SKILLS,
} from '../data/projects';

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionRecord extends ContactFormInput {
  id: string;
  submittedAt: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

/**
 * Filters projects by category and search query across name, title, description, and technologies.
 */
export function filterProjects(
  projects: ProjectItem[],
  category: ProjectFilterCategory,
  searchQuery: string
): ProjectItem[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'All' || project.categories.includes(category);
    if (!matchesCategory) return false;
    if (!query) return true;

    const searchable = [
      project.name,
      project.title,
      project.description,
      ...project.categories,
      ...project.technologies,
    ]
      .join(' ')
      .toLowerCase();

    return searchable.includes(query);
  });
}

/**
 * Filters technical skills by category and optional search query.
 */
export function filterSkills(
  skills: SkillItem[],
  category: SkillCategoryName,
  searchQuery: string = ''
): SkillItem[] {
  const query = searchQuery.trim().toLowerCase();

  return skills.filter((skill) => {
    const matchesCategory =
      category === 'All' || skill.category === category;
    if (!matchesCategory) return false;
    if (!query) return true;

    return (
      skill.name.toLowerCase().includes(query) ||
      skill.category.toLowerCase().includes(query) ||
      skill.context.toLowerCase().includes(query)
    );
  });
}

/**
 * Validates the contact form without silent fallbacks.
 */
export function validateContactForm(
  input: ContactFormInput
): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedSubject = input.subject.trim();
  const trimmedMessage = input.message.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  if (!trimmedSubject) {
    errors.subject = 'Please specify a topic or subject.';
  }

  if (!trimmedMessage) {
    errors.message = 'Please enter a message.';
  } else if (trimmedMessage.length < 12) {
    errors.message = 'Message must be at least 12 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates a clean, accurate Markdown resume strictly from Aaditya Singh's verified information.
 */
export function generateResumeDocument(): string {
  const skillGroups = new Map<string, string[]>();
  for (const s of TECHNICAL_SKILLS) {
    const list = skillGroups.get(s.category) ?? [];
    list.push(s.name);
    skillGroups.set(s.category, list);
  }

  const skillsSection = Array.from(skillGroups.entries())
    .map(([cat, names]) => `- **${cat}**: ${names.join(', ')}`)
    .join('\n');

  const projectsSection = PROJECTS.map(
    (p) =>
      `### ${p.name} — ${p.title}\n- **Stack**: ${p.technologies.join(', ')}\n- **Summary**: ${p.description}`
  ).join('\n\n');

  return `# ${PERSONAL_CONFIG.name}
**${PERSONAL_CONFIG.professionalTitle}**
Location: ${PERSONAL_CONFIG.location} | GitHub: ${PERSONAL_CONFIG.links.github}

## Professional Summary
${PERSONAL_CONFIG.aboutParagraphs.join('\n\n')}

## Education
**${PERSONAL_CONFIG.education.institution}**
- ${PERSONAL_CONFIG.education.degree}
- Expected Graduation: ${PERSONAL_CONFIG.education.expectedGraduation}

## Technical Skills
${skillsSection}

## Featured Projects
${projectsSection}

## Hackathons & Practical Engineering
- **PayPal AI Hackathon**: Built IntentLock Commerce — AI Personal Shopping Agent with Intelligent Payment Security Firewall.
`;
}
