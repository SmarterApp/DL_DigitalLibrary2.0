import { mockResourceImage } from 'src/app/data/mock-images';
import { ResourceDetailsModel } from './resource/model/resource-details.model';
import { ResourceModel } from './resource/model/resource.model';
import { OverviewModel, ResourceMaterial } from './resource/model/overview.model';
import { ResourceType } from './resource/model/resource-type.enum';

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockResourceModel = <ResourceModel> {
	resourceType: ResourceType.Instructional,
	details: <ResourceDetailsModel> { 
		title: 'Resource Title ',
		subjects: [],
		grades: [],
		targets: [],
		claims: [],
		standards: []
	},
	overview: <OverviewModel> {
		description: 'Test Description',
		resourceMaterials: [ <ResourceMaterial>{  title: 'Material', url: 'www.google.com', description: 'test description'}],
		successCriteria: 'Test Success Criteria',
		differentiation: 'Test Differentiation'
	}
};

//Example
export const mockApiResourceExample = {
	id: 1,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "Connecting Fraction Division Equations to Visual Models",
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
	// metadata
	resourceThumbnail: mockResourceImage,
	educationalAlignments: [
		{ title: 'Problem Solving', shortName: '2'}
	], 
	targetAlignments: [
		{ title: 'The Number System', shortName: 'B' }
	],
	learningGoals: 'The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.',
	connectionsPlaylist: [ {
		title: 'Grade 6 Fractions',
		numberOfResources: 6,
		assessmentType: 1 // how will this be defined?
	}],
	standards: ['6.NS.A.1', '6.NS.A.3', '5.NS.A.4'],

	//overview
	altBody: `
		In this task, students will engage with division of fraction tasks that uset hes ame context but require sutdents to divide the fractions 
		in the opposite order.  Sutdents solve the tasks by creating visual models, selecting the equations that appropriately represents the situation,
		and confirming their solutions by solving said equations and comparing back to the visual models.  Students will work to answer the questions,
		"How do these numbers and operations work together?"
	`,
	attachments: [ {
		name: 'Illustrative Mathematics Task: How Many Containers in One Cup / Cups in One Container?',
		url: 'https://tasks.illustrativemathematics.org/content-standards/tasks/408',
		description: `
			Students will need to be given a copy of the Illustrative Mathematics task.  This could be a paper copy for each student, or the task
			could be projected via use of a Smartboard, or document camera.  The task could also be delivered to students electornically via
			Google or another online platform.
		`
	}],
	differentiation: `
		<p>
			If your students are <b>below</b>: Modify the number of problems to include a whole number divided by a fraction.  This may provide
			access to students who are still making sense of fraction division.
		</p>
		<p>
			If your students are <b>above</b>: Change one of the numbers to a mixed number to extend student understanding about division of
			freactions with fractions greater than one.
		</p>
	`,
	successCriteria: `
		<ul>
			<li>Students will be able to construct visual models to solve contextual problems involving division of fractions.</li>
			<li>Students will be able to pair visual fraction models with appropriate equations.</li>
			<li>Students will be able to compute the quotients of fractions.</li>
		</ul>
	`,
	steps: [{
		number: 1,
		title: 'Engage Students'
	}, {
		number: 2,
		title: 'Introduce Visual Representations'
	}, {
		number: 3,
		title: 'Numerical Representation'
	}, {
		number: 4,
		title: 'Check-In'
	}, {
		number: 5,
		title: 'Practice Problem'
	}]

};

export const mockApiResource= {
	...mockApiResourceExample,
	...polyfillMissingApiData
};

export const mockApiResourceWithNulls = {
	...mockApiResource,
	subjects: undefined,
	grades: undefined,
	targetAlignments: undefined,
	educationalAlignments: undefined,
	standards: undefined
}