/*tslint:disable:max-line-length*/
export enum ErrorType {
  AuthNoAppAccess = 'auth-no-app-access',
  ResourceIsPrivate = 'resource-is-private',
  ResourceIsTenantSpecific = 'resource-is-tenant-specific',
  Unknown = 'unknown'
}

export interface ErrorMessage {
  title: string;
  message: string;
  details?: string;
}

export const errorMessages: Map<ErrorType, ErrorMessage>  = new Map([
  [ErrorType.AuthNoAppAccess, {
    title: 'Unable to access Tools for Teachers.',
    message: 'It looks like your user is not configured with access to the Tools for Teachers application. Please contact help@smarterbalanced.org for assisstance.',
  }],

  [ErrorType.ResourceIsPrivate, {
    title: 'Please login to check for access.',
    message: 'The resource you\'re trying to view hs limited availability. Please login to see if your state/territory has access.',
    details: 'The requested resource exists but is restricted by tenant the the current user is not authenticated.'
  }],

  [ErrorType.ResourceIsTenantSpecific, {
    title: 'This resource is restricted.',
    message: 'Unfortunately this resource is not available to educators in your state/territory.',
    details: 'The requested resource exists but is restricted by tenant and the current user is not a member of the allowed tenants.'
  }],
  [ErrorType.Unknown, {
    title: 'This resource is unavaiable.',
    message: 'We apologize for the inconvenience.'
  }]
]);
