import { mockEvidenceImage, mockResourceImage } from 'src/app/data/mock-images';
import { DifferentiationModel } from './resource/model/differentiation.model';
import { FormativeModel } from './resource/model/formative.model';
import { OverviewModel, ResourceMaterial } from './resource/model/overview.model';
import { ResourceDetailsModel } from './resource/model/resource-details.model';
import { ResourceType } from './resource/model/resource-type.enum';
import { ResourceModel } from './resource/model/resource.model';

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
	},
	differentiation: <DifferentiationModel>{ 
		accessibilityStrategies: []
	},
	formative: <FormativeModel> {
		strategies: []
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
	favorite: false,

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
		In this task, students will engage with division of fraction tasks that use the same context but require students to divide the fractions 
		in the opposite order.  Students solve the tasks by creating visual models, selecting the equations that appropriately represents the situation,
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
		<h6>Support</h6>
		<p>
			Modify the numbers in the problems to include a whole number divided by a fraction. This may provide access to students who are still making 
			sense of fraction division.
		</p>
		<h6>Challenge</h6>
		<p>Change one of the numbers to a mixed number to extend student understanding about division of fractions with fractions greater than one.</p>
		<h6>Additional Differentiation Suggestions</h6>
		<p>Optional content a resource author may want to include specific to students learning English or students with disabilities.</p>
	`,
	accessibilityStrategies: [{
		title: 'Highlighter',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
		description: `A digital tool for marking desired text, item questions, item answers, or parts of
			these with a color. Highlighted text remains available throughout each test segment. `

	}, {
		title: 'Line reader',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `The student uses an onscreen universal tool to assist in reading by raising and
			lowering the tool for each line of text on the screen.`
	}],
	connectionToFap: `
		<h6>Clarify Intended Learning</h6>
		<p>
			Students will participate in a Collaborative Discussion to describe the success criteria in their own words. Students may use words or pictures to 
			express their understanding of how they will know they have been successful with this task.
		</p>
		<h6>Elicit Evidence</h6>
		<ul>
			<li>Students will create a visual model independently. The students may adjust their models as their thinking and reasoning changes through discussion.</li>
			<li>Students will independently select the equations that appropriately match their representations and solve the equations.</li>
			<li>Students will discuss their solutions – discussions will elicit evidence of student thinking.</li>
		</ul>
		<h6>Interpret Evidence</h6>
		<p>Review the visual models for accuracy: labeling, scale, operation, and application.</p>
		<h6>Act on Evidence</h6>
		<p>
			Feedback
			<ul>
				<li>The initial feedback will occur peer to peer.</li>
				<li>As the teacher listens to the peer conversations, questioning techniques will be utilized to move learning forward.</li>
			</ul>
			Instructional Moves
			<ul>
				<li>Support students in creating fractional visual models</li>
				<li>Select an equation that matches student skill</li>
				<li>Perform error analysis of student calculations to address misconception</li>
			</ul>
		</p>
	`,
	formativeStrategies: [{
		title: 'Verbal Feedback',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
	}, {
		title: 'Peer-to-Peer Feedback',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
	}, {
		title: 'Collaborative Discussion',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `
	}, {
		title: 'Circulate the Room',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `
	}, {
		title: 'Self-Assess',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
	}, {
		title: 'Fold the Line',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
	}],
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
	id: 0,
	subjects: undefined,
	grades: undefined,
	targetAlignments: undefined,
	educationalAlignments: undefined,
	standards: undefined
}


export const mockApiResourceExample2 = {
	id: 2,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "Finding and Citing Textual Evidence",
	status: true,
	created: "2019-03-16T06:50:38+00:00",
	changed: "2019-03-21T06:50:38+00:00",
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
	author: "Dr. Wendy",
	publisher: "Oxnard Union High School District",
	license: "Creative Commons Attribution",
	licenseSecondary: "Creative Commons Attribution",
	copyrightClearaceForms: "",
	pii: "None",
	subjects: ["ELA"],
	grades: ["Grade 6"],
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
const polyfillMissingApiData2 = {
	favorite: false,

	// metadata
	resourceThumbnail: mockEvidenceImage,
	educationalAlignments: [
		{ title: 'Informational Texts Long text long test longer than this.', shortName: '1'},
		{ title: 'R&I', shortName: '4'}
	], 
	targetAlignments: [
		{ title: 'Key Texts', shortName: '8' },
		{ title: 'Central Ideas', shortName: '9' },
		{ title: 'Use Evidence', shortName: '4' }
	],
	learningGoals: 'The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.',
	connectionsPlaylist: [ {
		title: 'Grade 6 Science',
		numberOfResources: 24,
		assessmentType: 1 // how will this be defined?
	}, {
		title: 'Citing Sources',
		numberOfResources: 18,
		assessmentType: 1 // how will this be defined?
	}],
	standards: ['CCSS.ELA-Literacy.RST.6-8.1', 'CCSS.ELA-Literacy.RST.6-8.2'],

	//overview
	altBody: `
		In this task, students will engage with division of fraction tasks that use the same context but require sutdents to divide the fractions 
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
	accessibilityStrategies: [{
		title: 'Highlighter',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
		description: `A digital tool for marking desired text, item questions, item answers, or parts of
			these with a color. Highlighted text remains available throughout each test segment. `

	}, {
		title: 'Line reader',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `The student uses an onscreen universal tool to assist in reading by raising and
			lowering the tool for each line of text on the screen.`
	}],
	connectionToFap: `
		<h6>Clarify Intended Learning</h6>
		<p>
			Students will participate in a Collaborative Discussion to describe the success criteria in their own words. Students may use words or pictures to 
			express their understanding of how they will know they have been successful with this task.
		</p>
	`,
	formativeStrategies: [{
		title: 'Verbal Feedback',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
		description: `Learning performance feedback learning reproduce Henry Pluckrose certificate. Arrange Kirkpatrick recall learning recall, 
			relate mentoring authoring tool andragogy mentos record describe writing technical writing. Facilitating list asynchronous, 
			adaptive ADDIE draft Storyline instructional design. `
	}, {
		title: 'Fold the Line',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf',
		description: `Learning performance feedback learning reproduce Henry Pluckrose certificate. Arrange Kirkpatrick recall learning recall, 
			relate mentoring authoring tool andragogy mentos record describe writing technical writing. Facilitating list asynchronous, 
			adaptive ADDIE draft Storyline instructional design.`
	}],
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
		title: 'Excercise in citing textual evidence'
	}, {
		number: 3,
		title: 'Re-read passage with student'
	}, {
		number: 4,
		title: 'Confirm the standards and learning objectives'
	}]

};

export const mockApiResource2 = {
	...mockApiResourceExample2,
	...polyfillMissingApiData2
};