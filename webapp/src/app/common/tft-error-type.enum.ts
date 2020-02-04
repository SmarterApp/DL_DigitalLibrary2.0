/*tslint:disable:max-line-length*/
export enum TftErrorType {
  AuthNoAppAccess = 'auth-no-app-access',
  ResourceIsPrivate = 'resource-is-private',
  ResourceIsTenantSpecific = 'resource-is-tenant-specific',
  ResourceUnavailable = 'resource-unavailable',
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

export const errorMessages: Map<TftErrorType, TftErrorMessage>  = new Map([
  [TftErrorType.AuthNoAppAccess, {
    title: 'Unable to access Tools for Teachers.',
    message: 'It looks like your user is not configured with full access to the Tools for Teachers application. Please contact support@smarterbalanced.org for assistance.'
  }],

  [TftErrorType.ResourceIsPrivate, {
    title: 'Please login to check for access.',
    message: 'The resource you\'re trying to view hs limited availability. Please login to see if your state/territory has access.',
  }],

  [TftErrorType.ResourceIsTenantSpecific, {
    title: 'This resource is restricted.',
    message: 'Unfortunately this resource is not available to educators in your state/territory.',
  }],
  [TftErrorType.ResourceUnavailable, {
    title: 'This resource is unavailable.',
    message: 'We apologize for the inconvenience.'
  }],
  [TftErrorType.Unknown, {
    title: 'Tools for Teachers has encountered an error.',
    message: 'An error has occured that we cannot automatically correct. We apologize for the inconvenience.'
  }],
]);
