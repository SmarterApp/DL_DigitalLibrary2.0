export interface TenancyChainEntity {
  id: string;
  name: string;
}

export enum TenancyLevel {
  Institution = 'INSTITUTION',
  District = 'DISTRICT',
  State = 'STATE'
}

export interface UserTenancy {
  role?: TenancyChainEntity;
  level: TenancyLevel;
  client?: TenancyChainEntity;
  stateGroup?: TenancyChainEntity;
  state?: TenancyChainEntity;
  districtGroup?: TenancyChainEntity;
  district?: TenancyChainEntity;
  institutionGroup?: TenancyChainEntity;
  institution?: TenancyChainEntity;
}

export class User {
  constructor(
    public email: string,
    public name: string,
    public givenName: string,
    public familyName: string,
    public tenancy: UserTenancy[],
    public accessToken: string,
    public isDlEndUser: boolean
  ) {}

  get tenantIds(): string[] {
    return this.tenancy
      .filter(t => !!t.state)
      .map(t => t.state.id);
  }
}
