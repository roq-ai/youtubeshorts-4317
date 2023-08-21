const mapping: Record<string, string> = {
  invitations: 'invitation',
  organizations: 'organization',
  pdfs: 'pdf',
  summaries: 'summary',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
