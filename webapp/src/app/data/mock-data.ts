import { mockResourceImage } from 'src/app/data/mock-images';
import { ResourceHeaderModel } from './resource/model/resource-header.model';
import { ResourceModel } from './resource/model/resource.model';

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockResourceModel = <ResourceModel> {
	header: <ResourceHeaderModel> { 
		title: 'Resource Title ',
		subjects: [],
		grades: [],
		targets: [],
		claims: []
	}
};

//Example
export const mockApiResourceExample = {
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
};

// Polyfills missing fields not provided by the example payload
// in the API document from PCG.
const polyfillMissingApiData = {
	resourceThumbnail: mockResourceImage,
	educationalAlignments: [
		{ title: 'Problem Solving', shortName: '2'}
	], 
	targetAlignments: [
		{ title: 'The Number System', shortName: 'B' }
	],
	learningGoals: 'The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.',
	connectionsPlaylist: ['Grade 6 Fractions'],
	standards: ['6.NS.A.1', '6.NS.A.1', '6.NS.A.1']
};

export const mockApiResource= {
	...mockApiResourceExample,
	...polyfillMissingApiData
};