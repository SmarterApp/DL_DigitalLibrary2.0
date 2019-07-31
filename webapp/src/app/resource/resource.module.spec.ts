import { mockResourceModel } from "../data/mock-data";
import { ActivatedRoute } from "@angular/router";
import { of } from 'rxjs';

// Common ResourceModule mocks here.
const mockResourceActivatedRouteSnapshot = {
    snapshot: { data: { resource: mockResourceModel } },
    data: of({ resource: mockResourceModel })
};

export const ActivatedResourceRouteModule = { 
    provide: ActivatedRoute, 
    useValue: mockResourceActivatedRouteSnapshot 
};

