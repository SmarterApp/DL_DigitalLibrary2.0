import { mockResourceModel } from "../data/mock-data";

import { ActivatedRoute } from "@angular/router";

// Common ResourceModule mocks here.
const mockResourceActivatedRouteSnapshot = {
    snapshot: { data: { resource: mockResourceModel } } 
};

export const ActivatedResourceRouteModule = { 
    provide: ActivatedRoute, 
    useValue: mockResourceActivatedRouteSnapshot 
};

