/*tslint:disable:max-line-length*/
export enum TftErrorType {
  AuthNoAppAccess = 'auth-no-app-access',
  ResourceIsPrivate = 'resource-is-private',
  ResourceIsTenantSpecific = 'resource-is-tenant-specific',
  ResourceUnavailable = 'resource-unavailable',
  PageNotFound = 'page-not-found',
  Unknown = 'unknown'
}

export interface TftError {
  type: TftErrorType;
  details: string;
}

export interface TftErrorMessage {
  title: string;
  message: string;
}

export const errorMessages: Map<TftErrorType, TftErrorMessage> = new Map([
  [TftErrorType.AuthNoAppAccess, {
    title: 'Unable to access Tools for Teachers.',
    message: 'It looks like your user is not configured with full access to the Tools for Teachers application. Please contact your district assessment coordinator for assistance.'
  }],

  [TftErrorType.ResourceIsPrivate, {
    title: 'Please log in to check for access.',
    message: 'The resource you\'re trying to view has limited availability. Please log in to see if your state/territory has access.',
  }],

  [TftErrorType.ResourceIsTenantSpecific, {
    title: 'This resource is restricted.',
    message: 'Unfortunately this resource is not available to educators in your state/territory.',
  }],
  [TftErrorType.ResourceUnavailable, {
    title: 'This resource is unavailable.',
    message: 'We apologize for the inconvenience.'
  }],
  [TftErrorType.PageNotFound, {
    title: 'Oops!',
    message: 'We can’t seem to find the page you are looking for.'
  }],
  [TftErrorType.Unknown, {
    title: 'Tools for Teachers has encountered an error.',
    message: 'Please clear your browser cache and log in again to try resolving the problem. We apologize for the inconvenience.'
  }],
]);
