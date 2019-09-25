import { mockEvidenceImage, mockResourceImage, mockProfImage, mockFormativeImage, mockAccessImage, mockPlaylistImg } from 'src/app/data/mock-images';
import { DifferentiationModel } from './resource/model/differentiation.model';
import { FormativeModel } from './resource/model/formative.model';
import { OverviewModel, ResourceMaterial } from './resource/model/overview.model';
import { ResourceDetailsModel } from './resource/model/resource-details.model';
import { ResourceType } from './resource/model/resource-type.enum';
import { ResourceModel } from './resource/model/resource.model';
import { TopicSectionModel } from './resource/model/topic-section.model';

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockSearchFilters = {
	resourceTypes: [
		{ title: 'Instructional Resource', code: 'ir' },
		{ title: 'Professional Learning', code: 'pl' },
		{ title: 'Connections Playlist', code: 'cp' },
		{ title: 'Formative Assessment Strategies', code: 'fas' },
		{ title: 'Accessibility Strategies', code: 'as' }
	],
	grades: [
		{ title: '3', code: 'g3' },
		{ title: '4', code: 'g4' },
		{ title: '5', code: 'g5' },
		{ title: '6', code: 'g6' },
		{ title: '7', code: 'g7' },
		{ title: '8', code: 'g8' },
		{ title: 'High School', code: 'HS' }
	],
	subjects: [
		{ title: 'Mathematics', code: 'math' },
		{ title: 'English Language Arts', code: 'ela' }
	],
	claims: [],
	targets: [
		{ title: 'A. Apply mathematics to solve well­posed problems in pure mathematics and those arising in everyday life, society, and the workplace. (DOK 2, 3)', code: 'ta' },
		{ title: 'B. Select and use appropriate tools strategically (DOK 1, 2)', code: 'tb' },
		{ title: 'C. Interpret results in the context of a situation. (DOK 2)', code: 'tc' },
		{ title: 'D. Identify important quantities in a practical situation and map their relationships (e.g., using diagrams, two­way tables, graphs, flowcharts, or formulas). (DOK 1, 2, 3)', code: 'td' }
	],
	standards: [
		{ title: 'L-4', code: 'l4' },
		{ title: 'L-4a', code: 'l4a' },
		{ title: 'L-4b', code: 'l4b' },
		{ title: 'L-4c', code: 'l4c' },
		{ title: 'L-5', code: 'l5' },
		{ title: 'L-5a', code: 'l5a' },
		{ title: 'L-5b', code: 'l5b' },
		{ title: 'L-5c', code: 'l5c' },
		{ title: 'RI-1', code: 'ri1'},
		{ title: 'RI-2', code: 'ri2'},
		{ title: 'RI-3', code: 'ri3'},
		{ title: 'RI-4', code: 'ri4'},
		{ title: 'RI-5', code: 'ri5'},
		{ title: 'RI-6', code: 'ri6'},
		{ title: 'RI-7', code: 'ri7'},
		{ title: 'RI-8', code: 'ri8'},
		{ title: 'RI-9', code: 'ri9'},
		{ title: 'RL-1', code: 'rl1'},
		{ title: 'RL-2', code: 'rl2'},
		{ title: 'RL-3', code: 'rl3'},
		{ title: 'RL-4', code: 'rl4'},
		{ title: 'RL-5', code: 'rl5'},
		{ title: 'RK-6', code: 'rl6'},
		{ title: 'RL-7', code: 'rl7'},
		{ title: 'RL-8', code: 'rl8'},
		{ title: 'RL-9', code: 'rl9'},

	]
};

export const mockElaClaims = [
	{ title: 'Claim 1: Reading', code: 'ela-c1'},
	{ title: 'Claim 2: Writing', code: 'ela-c2'},
	{ title: 'Claim 3: Speaking & Listening', code: 'ela-c3'},
	{ title: 'Claim 4: Research/Inquiry', code: 'ela-c4'}
];

export const mockMathClaims = [
	{ title: 'Claim 1: Concepts & Procedures', code: 'math-c1'},
	{ title: 'Claim 2: Problem Solving', code: 'math-c2'},
	{ title: 'Claim 3: Communicating Reason', code: 'math-c3'},
	{ title: 'Claim 4: Modeling and Data Analysis', code: 'math-c4'}
];


export const mockResourceModel = <ResourceModel> {
	resourceType: ResourceType.Instructional,
	details: <ResourceDetailsModel> { 
		title: 'Resource Title ',
		subjects: [ 'ELA' ],
		grades: [],
		targets: [],
		claims: [],
		standards: [],
		relatedResources: [],
		relatedPlaylists: []
	},
	overview: <OverviewModel> {
		description: 'Test Description',
		successCriteria: 'Test Success Criteria',
	},
	attachments: [],
	steps: [],
	comments: 'test comment',
	differentiation: <DifferentiationModel>{ 
		accessibilityStrategies: []
	},
	formative: <FormativeModel> {
		strategies: []
	},
	topicSection: <TopicSectionModel> {
		topics: []
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
	updated: "2018-08-16T06:50:38+00:00",
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
	subject: ["Math"],
	grade: ["Grade 6", "Grade 8", "Grade 9"],
	
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
	documents: [
		"/api/file_documents/53/download",
        "/api/file_documents/52/download"
	],
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
// in the API document.
const polyfillMissingApiData = {
	favorite: false,

	// metadata
	resourceThumbnail: mockResourceImage,
	grades: [6, 8, 9],
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
		resourceId: 8,
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
		// Assumption: we will be able to glean filename and file extension from the url path.
		url: '/assets/mock-downloads/instructional-resource-content.docx',
		fileSize: 183000,
		type: 'activity'
	}, { 
		name: 'Illustrative Mathematics Task: Video Game Credits',
		url: '/assets/mock-downloads/video-game-credits.pdf',
		fileSize: 82060,
		type: 'activity'
	}],
	videoLinks: [
		'https://www.youtube.com/embed/Zc6I1RYlzOY',
		'https://www.youtube.com/embed/HS8cVQin_fc'
	],
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
	}, {
		title: 'Sentence Frames',
		link: 'https://portal.smarterbalanced.org/library/en/ela-construct-relevant-vocabulary.pdf',
		description: `
			Sentence frames or stems provide language support for students' writing and participation in academic discussions. As a scaffold for 
			students to start and structure an explanation, sentence frames help all students develop more fluent Foundational Writing Skills and, 
			in particular, allow students with varying English proficiency to use more complex Syntax and academic Vocabulary.
		`
	}],
	formativeAssessmentProcess: {
		clarifyIntendedLearning: `		
		<p>
			Students will participate in a Collaborative Discussion to describe the success criteria in their own words. Students may use words or pictures to 
			express their understanding of how they will know they have been successful with this task.
		</p>`,
		elicitEvidence: `
		<ul>
			<li>Students will create a visual model independently. The students may adjust their models as their thinking and reasoning changes through discussion.</li>
			<li>Students will independently select the equations that appropriately match their representations and solve the equations.</li>
			<li>Students will discuss their solutions – discussions will elicit evidence of student thinking.</li>
		</ul>`,
		interpretEvidence: `<p>Review the visual models for accuracy: labeling, scale, operation, and application.</p>`,
		actOnEvidence: `		
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
		</p>`		
	},
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
		title: 'Engage Students',
		content: `
			<p>
				Initiate the task by engaging students in the topic and clarifying intended learning. This task utilizes an approach called a Conceptual Bridge.
			</p>
			<p>
				Ask students a simple division problem that you know they’ll be successful at – what is four divided by two? Ask a few students to share how they 
				did the problem. They will likely say that they tried to figure out how many times three goes into six. Next ask them – what is two divided by ½? 
				They will likely grapple through the task of figuring out how many times ½ goes into four. Ask them to explain why four makes sense. Then ask them – 
				what is ½ divided by two – and ask a few students to share how they solved the problem and why. Then ask them – what is 2/3 divided by 1/2? Explain 
				that is the type of problem they will be working to solve.
			</p>`
	}, {
		number: 2,
		title: 'Introduce Visual Representations',
		content: `
			<p>
				Ask students to create a visual representation of the following scenario: ½ cup of water fills 2/3 of a container. 
			</p>
			<p>
				Whiteboard or scratch paper may be useful for this task. 
			</p>
			<p>
				As students are working, Circulate the Room to observe students working. As you circulate the room, pay attention to the following look-fors and 
				take action to help move students forward as needed.
			</p>
			<ul>
				<li>Confused about the terminology – cup vs. container. Clarify that a “cup” is a fixed amount, whereas a container can be a variety of sizes.</li>
				<li>Struggling to understand what is meant by the word “fills”. Clarify that in this problem the ½ cup equals 2/3 of a container.</li>
				<li>Not considering the scale of their drawings. Help them by explaining that it will help them to solve the problem if they consider the size of their representations.</li>
				<li>Having trouble getting started. Help them start with the ½ cup since it is a simpler fraction. Depending on how they represent the ½ (e.g. area model, tape diagram, number 
					line), help them then represent 2/3.</li>
				<li>Labeling their representation appropriately. Work with students to add this element and explain the importance of labels.</li>
			</ul>
			<h6>Differentiation</h6>
			<p><b>Support</b></p>
			<p>
				Modify the numbers in the problems to include a whole number divided by a fraction. This may provide access to students who are still making sense of fraction division.
			</p>
			<p><b>Challenge</b></p>
			<p>
				Change one of the numbers to a mixed number to extend student understanding about division of fractions with fractions greater than one.
			</p>
			<p>		
				Students will create a visual model independently. You can pair them together to share their visual representations and explain their reasoning. 
				Facilitate students providing Peer-to-Peer feedback. Consider providing Sentence Frames to support actionable student feedback. The students may 
				adjust their models as their thinking and reasoning changes through discussion.
			</p>
			<p>
				Strategically select student samples to be shared under a document camera for example, so that various types of visual fraction models will be 
				explored by the whole class (e.g. area model, tape diagram, number line). Select student samples that represent variety amongst student work. Prime 
				students prior to share their answers to these questions, so they will be confident in the moment.
			</p>
			<p>
				Some possible questions to prompt students:
				<ul>
					<li>What are some advantages of each type of model?</li>
					<li>What are some disadvantages of each type of model?</li>
					<li>What other types of models may be appropriate for this situation?</li>
				</ul>
			</p>
			<p>
				Provide Verbal Feedback to students on-the-fly.
			</p>
		`
	}, {
		number: 3,
		title: 'Numerical Representation',
		content: `
			<p>
				When students are ready, ask them (i.e., display the first problem in the student handout from Illustrative Mathematics): If 1/2 cup of water fills 2/3 of 
				a plastic container, how many containers will 1 cup fill? Have them grapple independently before moving to a partner, and then whole class discussion.
			</p>
			<p>
				Display the possible numerical representations. Students will independently select the equations that appropriately match their representations and solve 
				the equations.
			</p>
			<p>		
				With their partner, students will discuss their ideas. Again the teacher will Circulate the Room to elicit evidence of student thinking. Look for:
			</p>
			<ul>
				<li>Did the student choose an equation with the wrong operation?</li>
				<li>Did the student choose an equation that reversed the dividend and divisor?</li>
				<li>
					When solving the problem, did the student make an error in application of the division algorithm? Is the error in a basic arithmetic fact? (e.g.  
					if the error is a basic math fact issue it could be supported through use of work in the area of computational fluency, arithmetic fact charts or 
					a calculator, or if the error is a misapplication of the division algorithm it could be supported through reteach, or use of an alternate division 
					algorithm)
				</li>
			</ul>
			<p>Teacher will select a few students to share their discoveries with the class.</p>
			<p>
				Select students that represent a variety of ideas and approaches. Prime students prior to share their answers to these questions, so they will be 
				confident in the moment.
			</p>
			<p>Possible probing questions:</p>
			<ul>
				<li>Is your answer what you expected? Why?</li>
				<li>If your calculation didn’t match your model, in which result to you have more confidence? Why?</li>
			</ul>
		`
	}, {
		number: 4,
		title: 'Check-In',
		content: `
			<p>
				Ask students to Self-Assess their understanding of the first problem. Ask them to decide whether they are ready to try what they’ve learned to a new 
				problem, or more practice (training wheels). Depending on the votes, decide whether to have the whole class move on to a practice problem, reteach, 
				or some combination where some of the class gets additional instruction while the rest of the class attempts the next problem. Additionally, you can 
				ask students to line up according to how confident they are in creating visual representations of division fraction problems. Use the Fold the Line 
				approach and have students partner with a students who is on the opposite end of the confidence spectrum. Have them solve the problem together. 
			</p>
		`
	}, {
		number: 5,
		title: 'Practice Problem',
		content: `
			<p>Depending on how the lesson is going you can decide how to make use of the following practice problem:</p>
			<p>If 1/2 cup of water fills 2/3 of a plastic container, how many cups of water will the full container hold?</p>
			<p>Solve the problem by drawing a picture.</p>
			<p>Which of the following multiplication or divisions equations represents this situation? Explain your reasoning.</p>
			<p>1/2 × 2/3 = ? </p>
			<p>1/2 ÷ 2/3 = ? </p>
			<p>2/3 ÷ 1/2 = ? </p>
			<p>Solve the arithmetic problem you chose in part (3) and verify that you get the same answer as you did with your picture.</p>
		`
	}],
	comments: `
		<p>
			Depending on the time in the meeting, training, etc., this activity can be adapted by eliminating the gallery walk and 
			assigning quotes to partners or tables. If time is limited, the quotes could be displayed prior to the meeting, training, 
			etc., in the staff room or on tables during the week prior to the training.
		</p>
		<p>It is important to provide adequate time for participants to discuss and reflect on their quote and to share their findings with their peers.</p>
	`
};

export const mockApiResource= {
	...mockApiResourceExample,
	...polyfillMissingApiData
};

export const mockApiResourceWithNulls = {
	...mockApiResource,
	id: 0,
	attachments: undefined,
	steps: undefined,
	subject: undefined,
	grade: undefined,
	grades: undefined,
	targetAlignments: undefined,
	educationalAlignments: undefined,
	standards: undefined,
	documents: undefined
}


export const mockApiResourceExample2 = {
	id: 2,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "Finding and Citing Textual Evidence",
	status: true,
	created: "2019-03-16T06:50:38+00:00",
	updated: "2019-03-21T06:50:38+00:00",
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
	subject: ["ELA"],
	grade: ["Grade 6"],
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
// in the API document
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
	grades: [6],
	learningGoals: 'The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.  The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.',
	connectionsPlaylist: [ {
		title: 'Grade 6 Science',
		numberOfResources: 24,
		resourceId: 28,
		assessmentType: 2 // how will this be defined?
	}, {
		title: 'Citing Sources',
		numberOfResources: 18,
		resourceId: 29,
		assessmentType: 4 // how will this be defined?
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
		name: 'Note Taking',
		// Assumption: we will be able to glean filename and file extension from the url path.
		url: '/assets/mock-downloads/note_taking.docx',
		fileSize: 11664,
		type: 'informational'
	}, { 
		name: 'Textual Evidence',
		url: '/assets/mock-downloads/textual_evidence_revised.docx',
		fileSize: 24928,
		type: 'informational'
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
		Socratic Circles offer a controlled, pedagogical strategy that can bring democratic dialogue into our classrooms, 
		a type of real-world, student-centered learning where the teacher acts as facilitator. As students construct their 
		dialogue and their meaning of the piece of text, they are activating prior knowledge, making connections, and 
		synthesizing new schemata in their quest for understanding. It is the students—not the teacher—who guide and direct 
		the focus of the conversation in a search for meaning, understanding and knowledge.
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

export const mockDocument52 = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/52",
    "@type": "FileDocument",
    "id": 52,
    "name": "SBAC Running Record Analysis.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": null
}

export const mockDocument53 = {
	"@context": "/api/contexts/FileDocument",
	"@id": "/api/file_documents/53",
	"@type": "FileDocument",
	"id": 53,
	"name": "note_taking.docx",
	"path": "15d4a90dba2441666f775be72bdbd1e39816d684.docx",
	"mimeType": null
}

//Example
export const mockApiProfResourceExample = {
	id: 3,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "Quotes for Understanding the Formative Assessment Process",
	status: true,
	created: "2018-08-16T06:50:38+00:00",
	updated: "2019-08-19T16:50:38+00:00",
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
	resourceType: "Professional Learning",
	intendedEndUser: "Teacher",
	attributes: "Clarify Intended Learning",
	connectionToFap: "",
	studentAgency: "",
	altBody: "",
    documentId: "",
	resourceThumbnailUrl: "https://dl.com/image.png",
	licenseInformation: "",
	author: "Steve Green",
	publisher: "Amy Thierry",
	license: "Creative Commons Attribution",
	licenseSecondary: "Creative Commons Attribution",
	copyrightClearaceForms: "",
	pii: "None",
	grade: ["Grade 6", "Grade 8", "Grade 9"],
	alignmentTags: "",
	educationAlignments: [],
	targetAlignments: [],
	connectionToCcss: "",
	learningGoals: "",
	successCriteria: "",
	contexts: "",
	supportingEvidence: "",
	principles: "",
	mediaType: ["Video"],
	documents: [
		"/api/file_documents/54/download",
        "/api/file_documents/55/download"
	],
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

const polyfillMissingProfApiData = {
	favorite: false,
	// metadata
	resourceThumbnail: mockProfImage,
	category: 'Formative Assessment Process',
	learningGoals: 'Participants will deepen their understanding of the formative assessment process.',
	//overview
	altBody: `
		What makes the formative assessment process such a powerful process within the teaching-learning cycle? In this activity, 
		educators will review the components of the formative assessment process and then evaluate its impact on learning.
	`,
	formativeStrategies: [{
		title: 'Gallery Walk',
		link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
	}],
	successCriteria: `
		<ul>
			<li>Participants will discuss insights with a partner or small group.</li>
			<li>Participants will create reflection summary, on a poster, and/or in bullet points with peer.</li>
		</ul>
	`,
	steps: [{
		number: 1,
		title: 'Setting Up',
		content: `
			<p>
				Print the provided quotes (preferably on poster size paper) and display for participants to preview as they come into 
				the training and during the gallery walk.
			</p>`
	}, {
		number: 2,
		title: 'Gallery Walk',
		content: `
			<p>
				Have participants preview all of the posters and quotes by circulating the room using the Gallery Walk strategy. As an option, 
				you may play music. Allot enough time, if possible, provide up to 15-minutes , for everyone to circulate the entire room to 
				read and think about each of the quotes.
			</p>
		`
	}, {
		number: 3,
		title: 'Take a Stand',
		content: `
			<p>
				Upon completing the Gallery Walk, ask participants to stand next to the quote that they resonate the most with. 
				Provide up to 15-minutes to allow educators to discuss and share their thoughts about the quote they chose. Prompt 
				participants to share why they selected the quote and then to dig deeper into the meaning of the quote and connect 
				their thoughts and wonderings about the formative assessment process to the quote.
			</p>
		`
	}, {
		number: 4,
		title: 'In Your Own Words',
		content: `
			<p>
				Have each group synthesize their discussion into a summary, bullet points, and/or a visual representation on 
				poster paper to share out. In some cases, this could look like a rewording of the quote that connects with the 
				conversation, or it could end up being something that builds on the quote and extends understanding to make it 
				more concrete. Provide up to 15-minutes.
			</p>
		`
	}, {
		number: 5,
		title: 'Whole Group Share Out',
		content: `
			<p>
				Each group will share out their statements and insights based on their discussions and poster. Provide up to 
				15-minutes for this step.
			</p>
		`
	}],
	comments: `
		<p>
			Depending on the time in the meeting, training, etc., this activity can be adapted by eliminating the gallery walk and 
			assigning quotes to partners or tables. If time is limited, the quotes could be displayed prior to the meeting, training, 
			etc., in the staff room or on tables during the week prior to the training.
		</p>
		<p>It is important to provide adequate time for participants to discuss and reflect on their quote and to share their findings with their peers.</p>
	`
};

export const mockProfessionalResource = {
	...mockApiProfResourceExample,
	...polyfillMissingProfApiData
}

export const mockDocument54 = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/52",
    "@type": "FileDocument",
    "id": 52,
    "name": "Formative Assessment Quotes for Charts.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": null
}

export const mockDocument55 = {
	"@context": "/api/contexts/FileDocument",
	"@id": "/api/file_documents/53",
	"@type": "FileDocument",
	"id": 53,
	"name": "Formative Assessment Quotes.pdf",
	"path": "15d4a90dba2441666f775be72bdbd1e39816d684.docx",
	"mimeType": null
}

export const mockApiAccessStrategyResource = {
	id: 4,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "Highlighter",
	status: true,
	created: "2018-08-16T06:50:38+00:00",
	updated: "2019-08-21T16:50:38+00:00",
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
	resourceType: "Accessibility Strategy",
	intendedEndUser: "Teacher",
	attributes: "Clarify Intended Learning",
	connectionToFap: "",
	studentAgency: "",
	altBody: "",
    documentId: "",
	resourceThumbnailUrl: "https://dl.com/image.png",
	licenseInformation: "",
	author: "Amy Thierry",
	publisher: "Smarter Balanced",
	license: "Creative Commons Attribution",
	licenseSecondary: "Creative Commons Attribution",
	copyrightClearaceForms: "",
	pii: "None",
	subject: [],
	grade: [],
	alignmentTags: "",
	educationAlignments: [	],
	targetAlignments: [	],
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

const polyfillMissingAccessApiData = {
	favorite: false,
	// metadata
	resourceThumbnail: mockAccessImage,
	category: 'Universal Tool',
	//overview
	altBody: `
		A digital tool for marking desired text, item questions, item answers, or parts of these with a color.
	`,
	studentBenefits: `
		<p>
			Using this tool can help students:
			<ul>
				<li>Retain information</li>
				<li>Support studying</li>
				<li>Improve focus</li>
				<li>Improve the learning experience</li>
			</ul>
		</p>
	`,
	suggestedMaterials: `
		<ul>
			<li>Highlighters</li>
			<li>Low Odor</li>
		</ul>
	`,
	comments: `
		<ul>
			<li>Provide scaffolding to help students differentiate between main ideas, supporting details, conclusions, or text structure.</li>
			<li>Highlighter colors need to be selected appropriately for students with color-related disabilities.</li>
			<li>Highlighter grips (holders, assistive technology) need to be provided for students with physical disabilities.</li>
		</ul>
	`,
	instructionalUse: `
		<ul>
			<li>Students can use highlighter tools to digitally or physically mark desired text with a color.</li>
			<li>Students can use highlighters to distinguish useful/meaningful text and primary/secondary information when completing an assignment.</li>
			<li>Students can denote main ideas, supporting details, and conclusions.</li>
		</ul>
	`,
	strategyInAction: `
		<a href="https://sampleitems.smarterbalanced.org/BrowseItems" target="_blank">Try out the Highlighter on the Sample Items Website</a>
		<p>
			To access the tool, first navigate to any sample item. Select text with your mouse. With your mouse on the selected text, select the right 
			mouse button and then Highlight Selection, or select the highlight option from the context menu. 
		</p>
	`
};

export const mockAccessibilityStrategy = {
	...mockApiAccessStrategyResource,
	...polyfillMissingAccessApiData
}

export const mockApiFormativeStrategyResource = {
	id: 5,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "K-W-L Strategy",
	status: true,
	created: "2018-08-16T06:50:38+00:00",
	updated: "2019-08-22T16:50:38+00:00",
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
	resourceType: "Formative Strategy",
	intendedEndUser: "Teacher",
	attributes: "Clarify Intended Learning",
	connectionToFap: "",
	studentAgency: "",
	altBody: "",
    documentId: "",
	resourceThumbnailUrl: "https://dl.com/image.png",
	licenseInformation: "",
	author: "Amy Thierry",
	publisher: "Smarter Balanced",
	license: "Creative Commons Attribution",
	licenseSecondary: "Creative Commons Attribution",
	copyrightClearaceForms: "",
	pii: "None",
	subject: [],
	grade: [],
	alignmentTags: "",
	educationAlignments: [],
	targetAlignments: [	],
	connectionToCcss: "",
	learningGoals: "",
	successCriteria: "",
	contexts: "",
	supportingEvidence: "",
	principles: "",
	mediaType: ["Video"],
	documents: [
		"/api/file_documents/54/download",
        "/api/file_documents/55/download"
	],
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

const polyfillMissingFormativeApiData = {
	favorite: false,
	// metadata
	resourceThumbnail: mockFormativeImage,
	//overview
	altBody: `
		At the beginning of a unit, have students draw three columns on a piece of paper, labeled “K,” “W,” and “L.” 
		Ask students what they already know.
	`,
	studentBenefits: `
		<p>
			Using this tool can help students:
			<ul>
				<li>Organize info before, during and after a lesson or unit</li>
				<li>Write down connections by activating prior knowledge</li>
				<li>Ask questions to direct new learning</li>
			</ul>
		</p>
	`,
	suggestedMaterials: `
		<ul>
			<li>Graphic organizers for notetaking</li>
			<li>Assistive technology-digital notetaking apps</li>
			<li>Three or Four-column note forms or chart paper (paper & pen)</li>
		</ul>
	`,
	stepByStep: `
		<ul>
			<li>Students take notes and ask key questions before starting research projects</li>
			<li>Organize information to help study for tests.</li>
			<li>Make decisions about presenting information and how to demonstrate learning.</li>
			<li>Individualize classroom activities</li>
			<li>Students can synthesize information into a visual aid.</li>
		</ul>
	`,
	comments: `
		<ul>
			<li>Gauge where students previous knowledge is and if additional scaffolding is needed</li>
			<li>Check accuracy of information researched</li>
			<li>Check to see if the questions students generated are answered adequately</li>
			<li>Check organization of notes</li>
		</ul>
	`,
	strategyInAction: `
		<h6>Clairfy</h6>
		<p>“K” and “W” shows previous understanding and what students want to learn, explore or research.</p>
		<h6>Elicit</h6>
		<p>“What students write down for KW and L.  What did they learn, what questions do they have.</p>
		<h6>Interpret</h6>
		<p>
			Matching the “L” to the lesson objectives or success criteria will allow a teacher to know how to 
			act. Students area also interpreting to see if they have answered their own questions (W). Students 
			are interpreting the growth of their learning.
		</p>
		<h6>Act</h6>
		<p>
			Teacher decides on next steps for reteaching or extension activities based on the student reflection. 
			Students will pursue unanswered questions.
		</p>
	`
};

export const mockFormativeStrategy = {
	...mockApiFormativeStrategyResource,
	...polyfillMissingFormativeApiData
}

export const mockApiPlaylistResource = {
	id: 6,
	nid: 1234,
	vid: 1234,
	language: "english",
	title: "Research: Analyze/Integrate Information",
	status: true,
	created: "2018-08-16T06:50:38+00:00",
	updated: "2019-08-19T16:50:38+00:00",
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
	resourceType: "Connections Playlist",
	intendedEndUser: "Teacher",
	attributes: "Clarify Intended Learning",
	connectionToFap: "",
	studentAgency: "",
	altBody: "",
    documentId: "",
	resourceThumbnailUrl: "https://dl.com/image.png",
	licenseInformation: "",
	author: "Steve Green, Amy Thierry",
	publisher: "Smarter Balanced",
	license: "Creative Commons Attribution",
	licenseSecondary: "Creative Commons Attribution",
	copyrightClearaceForms: "",
	pii: "None",
	subject: ["ELA"],
	grade: [],
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

const polyfillMissingPlaylistApiData = {
	favorite: false,
	// metadata
	resourceThumbnail: mockPlaylistImg,
	category: 'Universal Tool',
	grades: ["8"],
	assessmentType: 3,
	educationalAlignments: [
		{ title: 'Research / Inquiry', shortName: '4'}
	], 
	targetAlignments: [
		{ title: 'Analyze / Integrate System', shortName: '2' }
	],
	standards: ['8.NS.A.1', '8.NS.A.2', '8.NS.A.3', '8.NS.A.4'],
	resources: [
		{ id: 4, title: 'Claim It!' },
		{ id: 2, title: 'Making Sense of the Source: Paraphrasing Evidence' }
	],
	//overview
	altBody: `
		Students can engage in research/inquiry to investigate topics, and to analyze, integrate, and present information. This target focuses on analyzing.
	`,
	studentBenefits: `
		<ul>
			<li>In a world of easily accessible information, it is important for students to develop strong critical thinking skills.</li>
			<li>Students can begin to grow intellectually through the process of logical reasoning to support their own authentic research-based ideas.</li>
		</ul>
	`,
	academicVocabulary: `
		<p>
			research, paraphrase, plagiarism, credible, trustworthy, claim(s), thesis, evidence, support, conflicting information, parenthetical or signal/transitional phrases for citation, argument
		</p>
	`,
	comments: `
		<p>Students should have foundational reading and writing skills. </p>
		<p>Research is a continuous process and students are able to revise and edit claims, evidence, or ideas based on their analysis of new evidence.</p>
	`,
	topics: [{
		title: 'Analyze multiple sources',
		above: 'Analyze multiple sources (5-6) that provide conflicting information on the same topic and explain where the sources disagree on matters of fact or interpretation.',
		near: 'Analyze multiple sources (3-4) that provide conflicting information on the same topic and identify where the sources disagree on matters of fact or interpretation.',
		below: 'Locate conflicting information from two provided sources on the same topic.'
	}, {
		title: 'Create a Claim',
		above: 'Synthesize ideas, facts, and details from multiple sources (5-6) to create an evidenced-based claim or thesis.',
		near: 'Synthesize ideas, facts, and details from multiple sources (3-4) to create an evidenced-based claim or thesis.',
		below: 'Use ideas, facts, and details to support a teacher-provided claim.',
		resources: [{ id: 3, title: 'Claim it!' }]
	}, {
		title: 'Paraphrase',
		above: 'Identify and paraphrase strong, concise textual evidence that supports the claim/thesis.',
		near: 'Identify and paraphrase strong textual evidence that supports the claim/thesis.',
		below: 'Identify and paraphrase textual evidence that supports a teacher-supplied claim/thesis.',
		resources: [
			{ id: 4, title: 'Making Sense of the Source: Paraphrasing Evidence' },
			{ id: 5, title: 'Link to Some other Resource Related to this Topic' }
		]
	}, {
		title: 'Cite',
		above: 'Cite correctly using both signal phrases and parenthetical citations.',
		near: 'Cite correctly using either signal phrases or parenthetical citations.',
		below: 'Cite paraphrased textual evidence using teacher-supplied graphic organizers and sentence starters.'
	}],
	suggestionsForIntervention: `
		<p>For students who are not yet at grade level, additional support may be needed to:</p>
		<ul>
			<li>Connecting skip counting to multiplication</li>
			<li>Skip count using non-benchmark numbers.</li>
			<li>Represent multiplication using an array model.</li>
			<li>Connect the relationship between multiplication and division.</li>
			<li>Use a multiplication strategy to find a product.</li>
		</ul>
		<p>Search for resources to support students in mastering these skills.</p>
	`	
};

export const mockPlaylistResource = {
	...mockApiPlaylistResource,
	...polyfillMissingPlaylistApiData
}