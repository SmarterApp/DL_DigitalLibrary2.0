import { APP_INITIALIZER } from '@angular/core';
import { AppConfig } from '../common/config/app.config';
import { IAppConfig } from '../common/config/config.model';
import { DataService } from './data.service';
import { MockDataService } from './mock-data.service';
import { LoggingService } from '../common/logging/logging.service';

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockRootActivatedRouteSnapshot = {
    snapshot: { data: { currentUser: mockUser } } 
};

export function mockAppConfig() {
    return () => {
        AppConfig.settings = <IAppConfig>{ 
            env: { name: 'Unit Tests' }, 
            logging: { level: 7 }  // Set to level 0 to see debug logs
        };
    }
  }

export const initializeSettingsProvider = { 
    provide: APP_INITIALIZER,
    useFactory: (mockAppConfig),
    deps: [ ], multi: true 
};

export const mockDataServiceProviders = [ 
    { provide: DataService, useClass: MockDataService }, 
    LoggingService, 
    initializeSettingsProvider 
];
  
//Example
export const mockResource = {
	id: 1,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "Resource Title",
	status: true,
	created: "2018-08-16T06:50:38+00:00",
	changed: "2018-08-16T06:50:38+00:00",
	deletedAt: null,
	promote: true,
	uuid: "24cvq2414v124v5145b14bbv4",
	temp: false,
	uniqueViews: 302,
	totalViews: 350,
	resourceState: "Create",
	html5: false,
	asserDownloads: 100,
	uniqueDownloads: 20,
	avgRating: "3.5",
	isHidden: false,
	resourceType: "Instructional and Professional Learning",
	intendedEndUser: "Student",
	attributes: "Clarify Intended Learning",
	connectionToFap: "",
	studentAgency: "",
	altBody: "",
	documentId: "",
	resourceThumbnailUrl: "https://dl.com/image.png",
	licenseInformation: "",
	author: "Mary Smith",
	publisher: "John Roberts",
	license: "Creative Commons Attribution",
	licenseSecondary: "Creative Commons Attribution",
	copyrightClearaceForms: "",
	pii: "None",
	subjects: ["ELA", "Math"],
	grades: ["Grade 6", "Grade 8", "Grade 9"],
	alignmentTags: "",
	educationAlignments: [
		{ title: "", shortName: "" },
		{ title: "" }
	],
	targetAlignments: [
		{ title: "", shortName: "" },
		{ title: "" }
	],
	connectionToCcss: "",
	learningGoals: "",
	successCriteria: "",
	contexts: "",
	supportingEvidence: "",
	principles: "",
	mediaType: ["Video"],
	intendedStudent: ["All Students"],
	educationalUse: ["Unit", "Lesson"],
	classroomTechnologies: ["Internet"],
	moduleType: ["Score Report"],
	subscriptionPackageType: "Summative and formative resource",
	viewPermissions: "All states",
	state: ["California"],
	resourceActions: "Allow primary material to be downloaded",
	permanentLinkSettings: "Private",
	temporaryPublicLink: "Enable Temporary Public Link",
	temporaryPublicLinkTime: "5 mins"
}
