interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner'],
  tenantName: 'Organization',
  applicationName: 'YouTubeshorts',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
