export const resourceMeta = [
  {
    slug: 'starter-guide',
    title: 'SHEbuilds Starter Guide',
    category: 'guides' as const,
    summary:
      'Seven practical steps to go from a small idea to a real neighbourhood business — start one step at a time.',
    headerImage: '/brand/SHEbuilds_Starter_Kit.webp',
    order: 1,
    file: 'starter-guide.md',
  },
  {
    slug: 'finance-templates',
    title: 'The Finance Templates',
    category: 'finance' as const,
    summary:
      'Simple tables for startup costs, monthly expenses, revenue forecasts, and savings — no advanced maths required.',
    headerImage: '/brand/SHEbuilds_finance_templates_header.webp',
    order: 2,
    file: 'finance-templates.md',
  },
  {
    slug: 'branding-resources',
    title: 'The Branding Resources',
    category: 'branding' as const,
    summary:
      'Name your business, sketch a logo, build a mood board, and write a short brand story people will remember.',
    headerImage: '/brand/SHEbuilds_branding_resources_header.webp',
    order: 3,
    file: 'branding-resources.md',
  },
  {
    slug: 'loan-schemes',
    title: 'Government Loan Schemes for Women Entrepreneurs',
    category: 'loans' as const,
    summary:
      'Trusted government loan schemes for women starting or growing small businesses — who can apply and how.',
    headerImage: '/brand/Government_loan_schemes_header.webp',
    order: 4,
    file: 'loan-schemes.md',
  },
] as const

export const categoryLabels: Record<(typeof resourceMeta)[number]['category'], string> = {
  guides: 'Guides',
  finance: 'Finance',
  branding: 'Branding',
  loans: 'Loan schemes',
}
