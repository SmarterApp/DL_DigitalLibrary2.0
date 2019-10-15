/* tslint:disable:max-line-length quotemark object-literal-key-quotes*/
import {
  mockEvidenceImage, mockResourceImage, mockProfImage, mockFormativeImage,
  mockAccessImage, mockPlaylistImg, mockPlImageDeepeningUnderstandingOfFAP,
  mockIrImageAllSystemsGo, mockIrImageGrainOfSand, mockIrImageAnyWayYouSliceIt,
  mockIrImageSearching, mockIrImageQuad, mockPlImageFocusOnFeedback,
  mockFasImage3ActTasks, mockFasImage5MathProcesses
} from 'src/app/data/mock-images';
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

export const mockResourceModel = {
  resourceType: ResourceType.Instructional,
  details: {
    title: 'Resource Title ',
    subjects: [ 'ELA' ],
    grades: [],
    targets: [],
    claims: [],
    standards: [],
    relatedResources: [],
    relatedPlaylists: []
  } as ResourceDetailsModel,
  overview: {
    description: 'Test Description',
    successCriteria: 'Test Success Criteria',
  } as OverviewModel,
  attachments: [],
  steps: [],
  comments: 'test comment',
  differentiation: { accessibilityStrategies: [] } as DifferentiationModel,
  formative: { strategies: [] } as FormativeModel,
  topicSection: { topics: [] } as TopicSectionModel
} as ResourceModel;

// ## Instructional Resource Examples
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
    resourceId: 99,
    assessmentType: 1 // how will this be defined?
  }],
  standards: ['6.NS.A.1', '6.NS.A.3', '5.NS.A.4'],

  // overview
  altBody: `
    In this task, students will engage with division of fraction tasks that use the same context but require students to divide the fractions
    in the opposite order. Students solve the tasks by creating visual models, selecting the equations that appropriately represents the situation,
    and confirming their solutions by solving said equations and comparing back to the visual models. Students will work to answer the questions,
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
        Facilitate students providing Peer-to-Peer Feedback. Consider providing Sentence Frames to support actionable student feedback. The students may
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
      Depending on the time in the meeting, training, etc., this activity can be adapted by eliminating the Gallery Walk and
      assigning quotes to partners or tables. If time is limited, the quotes could be displayed prior to the meeting, training,
      etc., in the staff room or on tables during the week prior to the training.
    </p>
    <p>It is important to provide adequate time for participants to discuss and reflect on their quote and to share their findings with their peers.</p>
  `
};

export const mockApiResource = {
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
  learningGoals: 'The student can solve real-world and mathematical one-step problems involving division of fractions by fractions. The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.',
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

  // overview
  altBody: `
    In this task, students will engage with division of fraction tasks that use the same context but require sutdents to divide the fractions
    in the opposite order. Sutdents solve the tasks by creating visual models, selecting the equations that appropriately represents the situation,
    and confirming their solutions by solving said equations and comparing back to the visual models. Students will work to answer the questions,
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
      If your students are <b>below</b>: Modify the number of problems to include a whole number divided by a fraction. This may provide
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
};

export const mockDocument53 = {
  "@context": "/api/contexts/FileDocument",
  "@id": "/api/file_documents/53",
  "@type": "FileDocument",
  "id": 53,
  "name": "note_taking.docx",
  "path": "15d4a90dba2441666f775be72bdbd1e39816d684.docx",
  "mimeType": null
};

// ## Professional Resource Examples
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
  // overview
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
        the training and during the Gallery Walk.
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
      Depending on the time in the meeting, training, etc., this activity can be adapted by eliminating the Gallery Walk and
      assigning quotes to partners or tables. If time is limited, the quotes could be displayed prior to the meeting, training,
      etc., in the staff room or on tables during the week prior to the training.
    </p>
    <p>It is important to provide adequate time for participants to discuss and reflect on their quote and to share their findings with their peers.</p>
  `
};

export const mockProfessionalResource = {
  ...mockApiProfResourceExample,
  ...polyfillMissingProfApiData
};

export const mockDocument54 = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/52",
    "@type": "FileDocument",
    "id": 52,
    "name": "Formative Assessment Quotes for Charts.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": null
};

export const mockDocument55 = {
  "@context": "/api/contexts/FileDocument",
  "@id": "/api/file_documents/53",
  "@type": "FileDocument",
  "id": 53,
  "name": "Formative Assessment Quotes.pdf",
  "path": "15d4a90dba2441666f775be72bdbd1e39816d684.docx",
  "mimeType": null
};

// ## Strategy Resource Examples

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
  educationAlignments: [  ],
  targetAlignments: [ ],
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
  // overview
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
};

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
  targetAlignments: [ ],
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
  // overview
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
    <p>“What students write down for KW and L. What did they learn, what questions do they have.</p>
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
};

// ## Connections Playlist Examples

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
  // overview
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
};

// ## Demo Dataset

/* Resources in dataset:

  ID  Type            Title
  -----------------------------------------------------------------------------
   0  Instructional   null
   1  Instructional   Connecting Fraction Division Equations to Visual Models
   2  Instructional   Finding and Citing Textual Evidence
   3  Prof. Learning  Quotes for Understanding the Formative Assessment Process
   4  Access Strat    Highlighter
   5  FAP Strat       K-W-L Strategy
   6  Conn. Playlist  Research: Analyze/Integrate Information
   7  Instructional   All Systems Go?
   8  Instructional   A Grain of Sand or a Drop of Water
   9  Instructional   Any Way You Slice It!
  10  Instructional   Searching For Relevant Resources
  11  Instructional   Intro to Quadratic Formula
  12  Prof. Learning  Deepening Understanding of the FAP
  13  Prof. Learning  Focus on Feedback
  14  FAP Strat       3 Act Tasks
  15  FAP Strat       5 Math Processes

 Attachments in the dataset:

  ID  Title
  -----------------------------------------------------------------------------
  100 All Systems Go! Student Handout
  101 All Systems Go! Practice
  102 All Systems Go! Presentation
  200 A Grain of Sand Entrance Ticket
  201 A Grain of Sand Entrance Ticket Key
  202 A Grain of Sand Vocabulary List
  203 A Grain of Sand "I Do" Source
  204 A Grain of Sand "You Do" Source
  205 A Grain of Sand "We Do" Source
  206 A Grain of Sand Additional Practice

*/

export const mockIrAllSystemsGo = {
  id: 7,
  resourceType: "Instructional and Professional Learning",
  title: "All Systems Go?",
  author: "Nell Jean",
  publisher: undefined,
  subject: ["Math"],
  grades: [8],
  educationalAlignments: [ // claims
    { title: 'Concepts & Procedures', shortName: '1' }
  ],
  standards: ['CCSS.MATH.CONTENT.8.EE.C.8.B'],
  targetAlignments: [ // targets
    { title: 'Analyze and solve linear equations and pairs of simultaneous linear equations', shortName: 'D' }
  ],
  updated: "2019-08-05T13:43:23-0500",
  resourceThumbnail: mockIrImageAllSystemsGo,
  // overview
  altBody: 'This lesson uses students’ prior experiences with graphical representations of systems to facilitate their understanding of solving systems algebraically. In this lesson, students will continue to engage with systems of equations where both equations are in the form y = mx + b. Students will graduate to other types of system structures. They will learn that examining structures is a good first step since it is sometimes possible to recognize an efficient method for solving the system through observation. Students realize that if at least one of the equations has a single variable isolated, then that expression can be substituted into the other equation to get a single equation in one variable. Finally, students use the structure of a system of equations to reason about its lack of solutions.',
  learningGoals: `
    <ul>
      <li>Students will solve systems of equations.</li>
    </ul>`,
  successCriteria: `
		<ul>
      <li>I can use the structure of equations to figure out the number of solutions.</li>
      <li>I can solve systems of equations algebraically.</li>
      <li>I can solve systems of equations where two equations have different structures.</li>
		</ul>`,
  steps: [
    {
      number: 1,
      title: 'Lesson Preparation',
      content: `
        <ul>
          <li>Gather the materials for the lesson: scissors, straight edges, and the copy of the blackline master activity.</li>
          <li>Print the blackline masters of the different types. Prepare one set for every 2–3 students.</li>
        </ul>`
    },
    {
      number: 2,
      title: 'Entrance Ticket',
      content: `
        <p>
          The format for this Entrance Ticket is commonly referred to as a Number Talk. The Entrance Ticket should take no more than 5 minutes to complete.
        </p>
        <p>
          <ul>
            <li>Display each problem one at a time.</li>
            <li>Give students 1 minute of individual think time. Allow students to write on Scratch Paper. Ask students to give a signal when they have an answer and a strategy.</li>
            <li>After the appropriate think time is provided, select students to share different strategies for each problem.</li>
            <li>Leave each problem displayed through the group discussion and display students’ thinking for all to see.</li>
          </ul>
        </p>`
    },
    {
      number: 3,
      title: 'Activity 1 (Challenge Yourself)',
      content: `
        <p>
          In Activity 1 (Challenge Yourself), students solve systems of linear equations that lend themselves to substitution. There are 4 kinds of systems presented: the first has both equations given with the y -value isolated on one side of the equation, the second has one of the variables given as a constant, the third kind has one variable given as a multiple of the other, and the last has one equation given as a linear combination.  This progression of systems nudges students toward the idea of substituting an expression in place of the variable it is equal to.  Notice which kinds of systems students think are the least difficult to solve and which are the most difficult to solve.  A calculator may be used for students whose basic arithmetic skills are limited and/or to allow students to focus on the current concept.
        </p>
        <p>
          <ul>
            <li>Arrange students in groups of 2 or 3. Give students appropriate minutes of individual think time.</li>
            <li>Encourage students to check in with their partner(s) between questions (Think-Pair-Share). Tell students that if they disagree, they should work to reach agreement on an answer. The teacher may choose to support students with an appropriate sentence frame to guide discussions.</li>
            <li>It is crucial that the teacher takes the time to monitor student’s individual processes and group discussions to create a list of understandings and misconceptions to highlight.</li>
            <li>Follow up with a whole-class discussion.</li>
          </ul>
        </p>`
    },
    {
      number: 4,
      title: 'Activity 1 Synthesis',
      content: `
        <p>
          There are two main take-aways to synthesize with students. The first is to formalize the idea of substitution in a system of equations. The second is to recognize that systems that have both equations written with one isolated variable are actually special cases of substitution.
        </p>
        <p>
          Invite students to share which systems they thought would be easiest and which would be hardest to sole. To involve more students in the conversation, consider asking:
          <ul>
            <li>“Did you change your mind about any of the systems being more or less difficult after you solved them?”</li>
            <li>“What was similar in these problems?”</li>
            <li>“What was different?” </li>
            <li>“Will your strategy work for the other systems in this list?”</li>
          </ul>
        </p>
        <p>
          Tell students that the underlying key concept for all of these problems is that it is helpful to replace a variable with the expression it is equal to, and that this “replacing” is called “substitution.” Point out that setting the expressions for y in the first two problems equal to each other is really substituting y in one equation with the expression it is equal to (as given by the other equation). It may be helpful for students to hear language like, “Since y is equal to 2x, that means wherever I see y, I can substitute 2x”.
        </p>
        <p>
          Some students may have trouble transitioning from systems where both equations are given with one variable isolated to other kinds of systems.
        </p>`,
    },
    {
      number: 5,
      title: 'Activity 2 (Tyler\'s Justification)',
      content: `
        <p>
          In this activity, students are asked to make sense of Tyler’s justification for the number of solutions to the system of equations (MP3). This activity continues the emphasis on reasoning about the structure of an equation (MP7) and the focus should be on what, specifically, in the equations students think Tyler sees that makes him believe the system has no solutions.
        </p>
        <p>
          To launch the activity, tell students:
          <ul>
            <li>First, we’ll look at what Tyler says about the solution to a system of equations.</li>
            <li>Next, we’ll decide whether we agree or disagree with him.</li>
            <li>After that, we’ll have a class discussion.</li>
          </ul>
        </p>
        <p>
          Give students appropriate individual quiet think time to read the problem and decide whether they agree or disagree with Tyler. Critique, Connect, and Clarify with their partner and finish with a Quick Write activity.
        </p>
        <p>
          After appropriate think time was provided, dedicate the remaining time to whole-class discussion.
          <ul>
            <li>Start with a Four Corners (Class Vote): Who agrees with Tyler? Who disagrees? Why?
              <p>The goal of the discussion is to look at one way to reason about the structure of a system of equations in order to determine the solution, and then have students make their own reasoning about a different, but similar, system of equations.</p>
            </li>
            <li>If possible, invite students from each side of the poll to explain their reasoning. Students’ previous Quick Write activity should help with this process.
              <p>As students explain, it should come out that Tyler is correct.  If none of the students bring up the idea, make sure to point out that we can visualize this by graphing the equations in the system and noting that the lines look parallel and will never cross (project visualization of Tyler’s graph).</p>
            </li>
            <li>In the previous activity, students should have noticed that if they knew what one of the variables was equal to, they could substitute that value or expression into another equation in the same problem.</li>
            <li>Point out that in this problem (x + y) can be replaced with 5.  The resulting equation is 5 = 7, which cannot be true regardless of the choices of x and y.</li>
          </ul>
        </p>`
    },
    {
      number: 6,
      title: 'Activity 3 (Whole Class)',
      content: `
        <p>
          Display the following equations and ask students how many solutions they think the system has and to give a signal when they think they know:
          <ul>
            <li>4x+2y=8</li>
            <li>x+y=5</li>
          </ul>
        </p>
        <p>
          When the majority of the class signals that they have an answer, invite several students to explain their thinking (possibly under a document camera, if available).
        </p>
        <p>
          There are multiple ways students might reason about the number of solutions this system has. Bring up the following possibilities if no students do so in their explanations:
          <ul>
            <li>“Rewrite the second equation to isolate the y- variable and substitute the new expression into the first equation in order to find that the system of equations has no solutions.”</li>
            <li>Notice that both equations are lines with the same slope but different y -intercepts, which means the system of equations has no solutions.”</li>
            <li>Notice that 4 x + 2 y is double 2 x + y , but 8 is not 5 doubled, so the system of equations must have no solutions.”</li>
          </ul>
        <p>`
    },
    {
      number: 7,
      title: 'Entire Lesson Synthesis',
      content: `
        <p>
          To emphasize the concepts from this lesson, consider displaying the three systems and asking the following discussion questions:
          <ul>
            <li>x=2 AND y=3x-1</li>
            <li>x=2y+4 AND x=9-3y</li>
            <li>x=2y+3 AND y=2x-9</li>
          </ul>
        </p>
        <p>
          <ul>
            <li>“What is the first step you would take to solve the first system?”
              <p>Possible explanation: We already know the x -value of the solution, we only need to find the y -value. Substituting 2 for x in the other equation should help us solve for the y -value that makes both equations true when x is 2.</p>
            </li>
            <li>“What steps would you take to solve the second system?”
              <p>Possible explanation: We know two expressions that are equal to x, so we can set those expressions equal to each other.  Therefore, we know that 2y+4=9-3y, which can be solved using the techniques to solve equations with a single variable.  Once we know the value for y, we can find the value for x from either of the original equations from the system.</p>
            </li>
            <li>“For the third system, a student begins the substitution method by writing y=2∙2y+3-9 then y=4y-6. What has this student done wrong?”
              <p>Possible explanation: When substituting for x, the student did not multiply the entire expression by 2.</p>
            </li>
          </ul>
        </p>`,
    },
    {
      number: 8,
      title: 'Exit Ticket',
      content: `
        <p>
          This Exit Ticket asks students to solve a system of equations presented in an algebraic form. A coordinate plane purposefully is not provided. The main idea of this lesson is for students to use the substitution method, which is efficient and effective.
          <ul>
            <li>Solve this system of equations:  y=2x          AND          x=-y+6</li>
            <li>Answer (2, 4)
              <p>Sample response: Students may use the substitution method to rewrite the system as the one variable equation, x= − (2x) + 6 , and then solve.</p>
            </li>
            <li>Self-Assessment: Self-assessment questions are provided at the end of the Google Slides for teacher use at the end of class alongside the exit ticket or as a homework assignment.</li>
          </ul>
        </p>`
    }
  ],
  comments: `
    <p>
      The lesson assumes that students have experience solving systems by graphing and solving single variable equations on both sides.
    </p>
    <p>
      Review lesson to anticipate student misconceptions and clarification needs.
    </p>
    <p>
      Monitor students’ work/discussions/choices to inform next steps in instruction or next activity.
    </p>`,
  connectionsPlaylist: [ {
    title: 'Analyze and Solve Linear Equations',
    numberOfResources: 8,
    resourceId: 99,
    assessmentType: 1 // how will this be defined?
  }],
  documents: [
    "/api/file_documents/100/download",
    "/api/file_documents/101/download",
    "/api/file_documents/102/download"
  ],
  videoLinks: [],
  differentiation: undefined,
  accessibilityStrategies: [],
  formativeStrategies: [
    {
      title: 'Think-Pair-Share',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Strategic Questioning',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Red, Yellow, and Green Cup/Tile',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Exit Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Number Talk',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Entrance Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Critique, Connect, and Clarify',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Quick Write',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Four Corners (Class Vote)',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ],
  formativeAssessmentProcess: {
    clarifyIntendedLearning: '<p>Read the learning goal and success criteria aloud to the class. Explain why the learning goal is important to learn. Ask the students whether they have any clarifying questions, or ask students clarifying questions by having them identify words they are unsure about. It is also helpful to have students write the learning goal and success criteria in a journal or on a piece of paper. Students can also discuss the learning goal and success criteria with a partner.</p>',
    elicitEvidence: `
      <p>
        Prior to this lesson, the teacher should use previous classroom data, such as formative assessments, to determine student readiness. It is highly recommended for the teacher to anticipate student misconceptions based on prior formative assessment results, previous lessons, and feedback shared with students.
      </p>
      <p>
        Throughout the entire lesson, Strategic Questioning is used to guide students’ thinking toward using structures of equations to solve systems. Think Pair Share opportunities are provided throughout each activity, as well.
      </p>
      <p>
        In Activity 1. The teacher leads students through a “Challenge Yourself” activity as they self-assess by selecting a Red, Yellow, Green Cup/Tile to provide a visual cue for their level of understanding.
      </p>
      <p>
        The evidence of learning is an Exit Ticket. The exit ticket asks students to solve a system of equations presented in an algebraic form.  A coordinate plane purposefully is not provided. The main idea of this lesson is for students to use the substitution method, which is efficient and effective.
      </p>`,
    interpretEvidence: `
      <p>
        Prior to the lesson, teachers should complete every problem and anticipate misconceptions.
      </p>
      <p>
        The teacher will carefully monitor and assess students' responses to facilitate learning. During the lesson, the teacher will monitor answers provided from the students to evaluate any misconceptions regarding using structures to solve systems of equations. Teachers should monitor students’ thinking throughout each activity. Monitor both students’ independent work and group discussions to highlight student products that demonstrate the learning goals using different strategies.
      </p>`,
    actOnEvidence: `
      <p>
        The teacher can use the visual cues from the self-assessment with the Red, Yellow, and Green Cups/Tiles to arrange peer tutors or rearrange groups during activities. While monitoring student work/discussion, highlight student thinking that may help increase other students’ understanding. At the end of each activity, the teacher should take time to synthesize students’ thinking around the activity. The teacher will provide immediate feedback to students during activity synthesis and use Strategic Questioning in order to clarify misconceptions and build on prior knowledge. The teacher will also use evidence from the Exit Ticket to plan next steps.
      </p>
      Feedback
      <p>
        The teacher should circulate throughout the room and monitor students’ work/discussions and give prescriptive feedback on any misconceptions and understandings students have.
      </p>
      Instructional Moves
      <p>
        Many of the slides in the presentation include Teacher Notes. These notes detail which activities to use, which questions to ask, and how to respond to those questions or clarify the intended learning for that slide/word problem.
      </p>
      <p>
        The teacher should use the formal evidence from the Exit Ticket to decide whether additional practice is needed or whether students are ready to move on to a new lesson."
      </p>`
  },
};

export const mockIrDocAllSystemsGoHandout = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/100",
    "@type": "Handout",
    "id": 100,
    "name": "Student Handout (task statements).pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocAllSystemsGoPractice = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/101",
    "@type": "Worksheet",
    "id": 101,
    "name": "Practice.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocAllSystemsGoPresentation = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/102",
    "@type": "Presentation",
    "id": 102,
    "name": "Teacher Presentation.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrGrainOfSandDropOfWater = {
  id: 7,
  resourceType: "Instructional and Professional Learning",
  title: "A Grain of Sand or a Drop of Water: Using details to help understand the main idea/research topic.",
  author: "Leon Jabs",
  publisher: "",
  subject: ["ELA"],
  grades: [4],
  educationalAlignments: [ // claims
    { title: 'Research / Inquiry', shortName: '4' }
  ],
  standards: ["CCSS.ELA-LITERACY.RI.4.7"],
  targetAlignments: [ // targets
    { title: 'Interpret & Integrate Information', shortName: '2' }
  ],
  updated: "2019-07-26T11:29:37-0500",
  resourceThumbnail: mockIrImageGrainOfSand,
  altBody: `
    <p>
      This lesson will help the student understand how selecting details from a text will help them understand the
      main idea. Students will be reading an informative text about erosion. Throughout this lesson, they will practice
      choosing the details that support the topic and further explaining how those details help them understand the
      main idea more clearly. This will be done in an “I DO,” “WE DO,” and “YOU DO” format, with the text on wind
      erosion being the last part (YOU DO) of the lesson.
    </p>`,
  learningGoals: `
    <p>
      Students will be able to select details from a source and explain how those details help
      them understand the main idea/central idea or a research topic. When students can correctly select the
      details that support the main idea/central idea or research topic, they should be able to understand the
      learning goal.
    </p>`,
  successCriteria: `
    <p>
      Students will demonstrate success when they can:
      <ul>
        <li>determine key details that support the research.</li>
        <li>explain how key details support the research."</li>
      </ul>
    </p>`,
  steps: [
    {
      number: 1,
      title: 'Entrance Ticket',
      content: `
        <p>
          When students enter the classroom, give them the Entrance Ticket and have them work on it
          individually. This should take no more than 5 minutes. Assist the special needs students as needed. You may
          want to have a copy of the Entrance Ticket key for reference.
        </p>`
    },
    {
      number: 2,
      title: 'Entrance Ticket Observations',
      content: `
        <p>
          Walk around the classroom to observe and determine which students have a clear understanding of
          choosing important details and those that will need additional help. If too many of the students were not able to
          identify at least 2 correct details, you may want to consider doing a lesson or mini-lesson on key details that
          support the main idea. If it is determined that most of the students are ready, proceed with the lesson.
        </p>
        <p>
          For those students who are struggling with finding the details, try doing a small group with them. If many or
          most of your students seem to be struggling, a mini-lesson on finding key details may be needed. To assist
          with access to reading the information on erosion, have speech-to-text available for a particular passage, use
          Strikethrough to eliminate irrelevant details, and use a Highlighter to identify specific details.
        </p>
        <p>
          NOTE: This is written up for students to work in pairs (or triads). It is the teacher’s discretion to do the
          final portion (“YOU DO”) as pairs or individually.
        </p>`
    },
    {
      number: 3,
      title: 'Directions',
      content: `
        <p>
        “Today we are going to look at some paragraphs that have been broken down into individual
        sentences. I will do one first and you will follow along with me. Next, we will do one together and finally
        you will be given a passage to do with a partner (or individually if you decide to do this lesson that way) .
        </p>
        <p>
        You will be given an envelope that has a set of sentences in it. You will read over the sentences. After
        reading the sentences, you will decide which are the key details.” More advanced students/upper grade
        students can do this with chunks of passages (chunks can be grouped paragraphs or logical connections the
        teacher has predetermined prior to assigning the passage.). “Once you have decided which sentences are
        the supporting details, you will turn to your partner and begin discussing which are the key details.
        </p>
        <p>
        Partner A will go first, then partner B. You need to tell your partner why you chose the sentences you
        did. The next step will be to explain to your partner what you know or understand about your main
        idea/research topic.”
        </p>
        <p>
        NOTE: Each source of the “I, WE, and YOU DO” consists of 2 pages. The first page has active links to
        vocabulary words. It is at the teacher's discretion whether to use the links and which links to use. The second
        page is a duplicate of the first page but without the links.
        </p>`
    },
    {
      number: 4,
      title: 'Source One — I Do',
      content: `
        <p>
          “Let’s start by looking at our first source.” You can either give the students the specific
          paragraph on the source they will be looking at or you can do this as a whole group by projecting the
          paragraph/passage on the board and giving students a hard copy of the paragraph/passage to annotate as you
          work together. The “I DO” source could be used here, or a source of your own choosing. Students will follow
          along with you as you model the process via a “Think-Aloud.” If you use the supplied source, the lesson may go
          as follows: “Our first source is on erosion. This source is the “ I Do ” portion of our lesson. First, I am
          going to read through the whole source and then I will read it again and annotate. Read the source out
          loud one time and then read a second time and annotate.
        </p>
        <p>
          Today, we will be selecting key details from a text that support the main idea of a research topic.
        </p>
        <p>
          After we select the key details, we will explain how they help us understand the research topic. When
          we have determined our key details, we will ask ourselves the question “What does this tell me about
          my research topic?” or “What do I know about the main idea or research topic?”
        </p>
        <p>
          NOTE: The next two steps can be done as a class or in pairs/groups, with the teacher still leading.
          This will be the “ WE DO ” portion of the lesson.
        </p>`
    },
    {
      number: 5,
      title: 'Source Two — We Do',
      content: `
        <p>
        Repeat the expectations for this activity and then hand out the envelopes to each pair after
        partnering each pair of students. If you have an uneven number of students, you can either have the extra
        student work with you or in a triad of your choosing. More advanced students can work independently and
        share their results with the class rather than working in a pair. The main idea should be given to the students
        since the focus is on finding the details that support it. You may differentiate here for your advanced students
        by having them determine the main idea.
        </p>`
    },
    {
      number: 6,
      title: 'Source Two — Check',
      content: `
        <p>
          After sharing with their partner, student pairs will come to the teacher and place their sentences in
          the order of main idea first (given) and supporting details second using whichever technology you have.
        </p>
        <p>
          Partner B will go first. The student needs to read each sentence and identify which is the main idea and why.
        </p>
        <p>
          Partner A will do the same. The teacher uses guiding questions to help guide students to determine which
          sentences are the key details and why each particular sentence was chosen. Do this for each set of students.
        </p>`
    },
    {
      number: 7,
      title: 'Feedback',
      content: `
        <p>
          To address the “act on evidence” part of formative assessment, the teacher can review all of the
          responses from the students either as they are sharing with the class by using a checklist of expectations. The
          teacher can then either go on to add in more expectations in the next lesson or reteach the concepts and
          assess again.
        </p>`
    },
    {
      number: 8,
      title: 'Source Three — You Do',
      content: `
        <p>
          The final source can be given to the students as a single paragraph or broken down into sentences
          for those that need additional help. This will be the “ YOU DO ” part of the lesson.
        </p>`
    },
  ],
  connectionsPlaylist: [{
    title: 'Research: Interpret and Integrate Information',
    numberOfResources: 8,
    resourceId: 99,
    assessmentType: 3 // how will this be defined?
  }],
  // overview
  documents: [
    "/file_documents/200/download",
    "/file_documents/201/download",
    "/file_documents/202/download",
    "/file_documents/203/download",
    "/file_documents/204/download",
    "/file_documents/205/download",
    "/file_documents/206/download"
  ],
  videoLinks: [],
  differentiation: undefined,
  accessibilityStrategies: [
    {
      title: 'Highlighter',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `A digital tool for marking desired text, item questions, item answers, or parts of
        these with a color. Highlighted text remains available throughout each test segment. `
    },
    {
      title: 'Speech-to-Text',
      link: '#',
      description: ''
    },
    {
      title: 'Strikethrough',
      link: '#',
      description: ''
    },
  ],
  formativeAssessmentProcess: {
    clarifyIntendedLearning: `
      <p>
        Start the lesson by giving students an entrance ticket. The entrance ticket will allow the
        teacher to quickly see which students have a grasp on selecting key details as they pertain to the main
        idea/central idea or research topic. Refer to the entrance ticket key for a detailed example of what to
        look for in the final product.
      </p>`,
    elicitEvidence: `
      <p>
        The teacher can do a quick check of where students are on their understanding of
        details that support the main idea. From this point, the teacher may want to strategically pair up students to
        work together.
      </p>`,
    interpretEvidence: `
      <p>
        After the teacher has an understanding of where the students are in their understanding,
        he/she can begin the lesson of explaining how details help a reader understand the main idea. The lesson will
        be done in an “I DO,” “YOU DO,” and “WE DO” format.
      </p>`,
    actOnEvidence: `
      Feedback
      <p>
        Feedback will be given to students directly. It may be written or oral, depending on the teacher’s
        preference. Feedback at this point needs to be constructive. “Nice job,” or “I like that,” or complementary
        words or phrases are allowed, but need to be in addition to constructive feedback.
      </p>
      Instructional Moves
      <p>
        During this lesson, some students may struggle with choosing details as opposed to
        important or “key” details. This may not always be an easy fix or something that can be done on the spot. It
        would be helpful for those students if you had some practice paragraphs that had details and key details. You
        can adjust the difficulty by inserting or removing sentences as well as telling them how many details there are
        and how many key details there are. The point to remember is that a key detail tells the reader something
        specific or important about the topic/main idea.
      </p>
`
  },
  formativeStrategies: [
    {
      title: 'Entrance Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ],
  comments: `
    <p>
      Because this lesson is about selecting details that pertain to the main idea/research topic, it
      should not be taught with having a goal of determining the main idea. The main idea will be given to the
      students and the students will be determining the details that support their research or a research topic.
    </p>`
};

export const mockIrDocGrainEntranceTicket = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/200",
    "@type": "Handout",
    "id": 200,
    "name": "Entrance Ticket.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocGrainEntranceTicketKey = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/201",
    "@type": "Handout",
    "id": 201,
    "name": "Entrance Ticket Key.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocGrainVocabularyList = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/202",
    "@type": "Handout",
    "id": 202,
    "name": "Vocabulary List.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocGrainIDoSource = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/203",
    "@type": "Worksheet",
    "id": 203,
    "name": "I DO.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocGrainYouDoSource = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/204",
    "@type": "Worksheet",
    "id": 204,
    "name": "YOU DO.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocGrainWeDoSource = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/205",
    "@type": "Worksheet",
    "id": 205,
    "name": "WE DO.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocGrainPractice = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/206",
    "@type": "Worksheet",
    "id": 206,
    "name": "Additional Practice source.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrAnyWayYouSliceIt = {
  id: 9,
  resourceType: "Instructional and Professional Learning",
  title: "Any Way You Slice It!",
  author: "Michael Regan",
  publisher: "",
  subject: ["Math"],
  grades: [7],
  educationalAlignments: [ // claims
    { title: 'Concepts & Procedures', shortName: '1' }
  ],
  standards: ["CCSS.MATH.CONTENT.7.G.A.3"],
  targetAlignments: [ // targets
    { title: 'Draw, construct, and describe geometrical figures and describe the relationship between them', shortName: 'E' }
  ],
  updated: "2019-07-26T11:29:37-0500",
  resourceThumbnail: mockIrImageAnyWayYouSliceIt,
  altBody: `
    <p>
      Students will work with a partner to slice geometric solids and find two-dimensional shapes. Once students have
      worked with a partner, the teacher will bring the class together to go over the problems. The teacher can show a
      visual model of how each problem was solved. At the end of the slide show is an Exit Ticket to be used to check for
      understanding and also formally assess the intended learning goal. This lesson is accessed through a Google Slide
      presentation (technology required).
    </p>`,
  learningGoals: `
    <p>
      Students will describe two-dimensional figures that result from slicing prisms and pyramids by
      planes.
    </p>`,
  successCriteria: `
    <p>
      <ul>
        <li>I can identify two-dimensional shapes from slicing rectangular prisms and pyramids.</li>
        <li>I can explain how I arrived at those shapes.</li>
      </ul>
    </p>`,
  steps: [
    {
      number: 1,
      title: 'Materials Used',
      content: `
        <p>
          <ul>
            <li>Whiteboard or a projector for the slide show</li>
            <li>Three-dimensional geometric solids</li>
            <li>clay/playdough for the class</li>
            <li>wire/dental floss to slice the clay</li>
            <li>apple</li>
            <li>paint (optional)</li>
          </ul>
        </p>`
    },
    {
      number: 2,
      title: 'Introduction',
      content: `
        <p>
          <ul>
            <li>Before beginning the lesson, open the Google Slide Presentation for “Any Way You Slice It!”</li>
            <li>Introduce the lesson by telling students that today they will be identifying two-dimensional shapes by slicing three-dimensional geometric clay solids using a piece of wire/dental floss.</li>
            <li>The teacher can then display the Learning Goal (slide 3) for the students. Identify different types of two-dimensional shapes from slicing a three-dimensional solid (i.e., rectangle, trapezoid, hexagon).</li>
            <li>Continue by showing the students the Success Criteria (slide 4), and explain that they will know they have understood this lesson when they can:</li>
            <li>Identify two-dimensional shapes from slicing a rectangular prism and explain how they arrived at those shapes.</li>
            <li>Identify two-dimensional shapes from slicing a rectangular pyramid and explain how they arrived at those shapes (allow students to use scratch paper).</li>
          </ul>
        </p>`
    },
    {
      number: 3,
      title: 'Warm-up Activity',
      content: `
        <p>
          <ul>
            <li>As part of the lesson, the teacher will slice an apple to show a cross section (slide 5). If there is time, paint can also be used to make a stamp of the cross section of the apple.</li>
            <li>As the teacher is slicing the apple, the teacher could also be asking questions and checking for understanding.</li>
          </ul>
        </p>`
    },
    {
      number: 4,
      title: 'Pairing Students Up',
      content: `
        <p>
          <ul>
            <li>Have students pair up by two-dimensional geometric names and number of sides each geometric
shape given on the List of Polygons and Sides resource.</li>
          </ul>
        </p>`
    },
    {
      number: 5,
      title: 'Introduce the Lesson',
      content: `
        <p>
          <ul>
            <li>In this activity (slide 8), students are given clay and a piece of wire for cutting prisms and pyramids.
                Students are asked to draw cross sections freehand onto their worksheet, but this is not a skill that
                is required in order for students to be able to describe two-dimensional
                shapes.
                <p>
                  ■ Depending on the level of the student, use the At Level Worksheet , Below Level Worksheet
                  (Use List of Polygons and Sides as a reference), or the Above Level Worksheet .
                </p>
            </li>
            <li>Students will describe how the cross section changes as the plane moves.</li>
            <li>Arrange students in pairs. Give students 3–5 minutes of quiet work time followed by time to discuss shapes of cross sections with a partner. Follow with a whole-class discussion.</li>
            <li>Throughout the lesson, the teacher is checking for understanding and misconceptions.</li>
          </ul>
        </p>`
    },
    {
      number: 6,
      title: 'Exit Ticket',
      content: `
        <p>
          <ul>
            <li>Exit Ticket (slide 10) can be used at the end of the lesson for understanding and misconceptions.</li>
          </ul>
        </p>`
    },
    {
      number: 7,
      title: 'Teacher Next Step',
      content: `
        <p>
          <ul>
            <li>Additional resources are provided below for students who need additional support or for extensions.</li>
            <li>Within the slide presentation, teacher notes are added for additional support for the educator.</li>
          </ul>
        </p>`
    },
  ],
  connectionsPlaylist: [{
    title: 'Geometric Figures',
    numberOfResources: 8,
    resourceId: 99,
    assessmentType: 1 // how will this be defined?
  }],
  // overview
  documents: [
    "/file_documents/300/download",
    "/file_documents/301/download",
    "/file_documents/302/download",
    "/file_documents/303/download",
    "/file_documents/304/download",
    "/file_documents/305/download"
  ],
  videoLinks: [],
  differentiation: undefined,
  accessibilityStrategies: [],
  formativeAssessmentProcess: {
    clarifyIntendedLearning: `
      <p>
        <ul>
          <li>Introduce the lesson by telling students that today they will be identifying two-dimensional shapes by slicing three-dimensional geometric clay solids using a piece of wire/dental floss.</li>
          <li>The teacher can then display the Learning Goal (slide 3) for the students. Identify different types of two-dimensional shapes from slicing a three-dimensional solid (i.e., rectangle, trapezoid, hexagon).</li>
          <li>Continue by showing the students the Success Criteria (slide 4), and explain that they will know they have understood this lesson when they can:
              <ul>
                <li>Identify two-dimensional shapes from slicing a rectangular prism and explain how they arrived at those shapes.</li>
                <li>Identify two-dimensional shapes from slicing a rectangular pyramid and explain how they arrived at those shapes (allow students to use scratch paper).</li>
              </ul>
          </li>
        </ul>
      </p>`,
    elicitEvidence: `
      <p>
        Evidence is elicited through a series of independent work, classroom discussion, and Think-Pair-Share . The
        teacher will monitor student progress. Students will share their thinking and their mathematical process through
        partner work and whole-class activities.
      </p>`,
    interpretEvidence: `
      <p>
        The teacher will continuously interpret evidence of student thinking throughout the lesson by circulating, checking
        students’ work, guiding students through problems, guiding class discussions around the questions posed, and
        engaging with students as they work in pairs. The teacher will also formally interpret evidence of student thinking
        by examining students’ completed Exit Tickets , checking for understanding at the end of the lesson. The teacher
        could find misconceptions and share with the entire class.
      </p>`,
    actOnEvidence: `
      <p>
        The teacher can adjust instruction, revisit problems, and address misconceptions after collecting real-time
        evidence from the learning activities listed above. Using evidence from the Exit Ticket , the teacher will either
        assign additional practice and review or move on to the next lesson.
      </p>
      Feedback
      <p>
      The teacher can provide feedback throughout the lesson as students think and work in pairs. The teacher can also
      provide feedback through questions posed to students and as the teacher and students work together through each
      problem. Students can do Peer-to-Peer Feedback when working in partners. Finally, the teacher has an
      opportunity to provide verbal or written feedback using the evidence from the Exit Ticket.
      </p>
      Instructional Moves
      <p>
        <ul>
          <li>Many of the slides in the presentation include Teacher Notes. These notes detail which activities to use, which questions to ask, and how to respond to those questions or clarify the intended learning for that slide/word problem.</li>
          <li>The teacher should use the formal evidence from the Exit Ticket to decide whether additional practice is needed or whether students are ready to move on to a new lesson.</li>
        </ul>
      </p>
      <p>
        Struggling students:
        <ul>
          <li>A common struggle that students have is slicing a geometric shape at an angle.</li>
          <li>Review previous understanding of two-dimensional shapes.</li>
          <li>Provide access to geometric solids that have already been sliced.</li>
          <li>Intentionally pair student with another student to support student learning.</li>
          <li>Allow struggling students to slice a geometric shape parallel to the base.</li>
        </ul>
      </p>
      <p>
        Extending the Learning:
        <ul>
          <li>Allow students to slice other three-dimensional geometric solids and find other two-dimensional shapes.</li>
        </ul>
      </p>`
  },
  formativeStrategies: [
    {
      title: 'Exit Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Peer-to-Peer Feedback',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Think-Pair-Share',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ],
  comments: `
    <p>
      If additional formative assessments and quizzes are desired, please visit Edulastic . On Edulastic, teachers have the
      option to create their own formative assessment/quizzes. Teachers will need to create a free Edulastic account to
      access by clicking “Join for Free” in the top right corner of the screen.
    </p>`
};

export const mockIrDocAnySlicePresentation = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/300",
    "@type": "Presentation",
    "id": 300,
    "name": "Any Way You Slice It! Presentation.pptx",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
};

export const mockIrDocAnySlicePolygonList = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/301",
    "@type": "Handout",
    "id": 301,
    "name": "List of Polygons and Sides.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocAnySliceAtLevel = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/302",
    "@type": "Worksheet",
    "id": 302,
    "name": "Worksheet (below level).pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocAnySliceBelowLevel = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/303",
    "@type": "Worksheet",
    "id": 303,
    "name": "Worksheet (at level).pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocAnySliceAboveLevel = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/304",
    "@type": "Worksheet",
    "id": 304,
    "name": "Worksheet (above level).pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocAnySliceCrossSections = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/305",
    "@type": "Worksheet",
    "id": 305,
    "name": "Worksheet - Cross Sections.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrSearchingForRelevantResources = {
  id: 10,
  resourceType: "Instructional and Professional Learning",
  title: "Searching for Relevant Resources",
  author: "Michael Collins",
  publisher: "",
  subject: ["ELA"],
  grades: [10],
  educationalAlignments: [ // claims
    { title: 'Research / Inquiry', shortName: '4' }
  ],
  standards: ['CCSS.ELA-LITERACY.W.9-10.8'],
  targetAlignments: [ // targets
    { title: 'Evaluate Information / Sources', shortName: '3' }
  ],
  updated: "2019-07-10T11:29:37-0500",
  resourceThumbnail: mockIrImageSearching,
  altBody: `<p>Students will understand the importance of relevant sources as they conduct research.</p>`,
  learningGoals: `
    <p>
      <ol>
        <li>Students-Students will understand that not all reliable sources are necessarily relevant to their research goal/task.</li>
        <li>Students will be able to distinguish between relevant and irrelevant sources to best support their research goal.</li>
      </ol>
    </p>`,
  successCriteria: `
    <p>
      <ul>
        <li>I can determine the relevance of a reliable source by using the Relevant Rules handout.</li>
        <li>I can write a short response where I explain the differences between reliable and relevant resources.</li>
      </ul>
    </p>`,
  steps: [
    {
      number: 1,
      title: 'Clarify Intended Learning',
      content: `
        <p>
          The teacher defines the word “relevant” for students and explains that not all reliable resources are
          necessarily useful or relevant for a research paper. The teacher will point out the learning goals and success
          criteria to help students know what is asked of them.
        </p>`
    },
    {
      number: 2,
      title: 'Entrance Ticket',
      content: `
        <p>
          Students answer the Entrance Ticket quick write question, “List and explain the different features of a
          reliable resource.” They need to review this topic before they delve deeper into understanding what a
          reliable and relevant source is. The teacher asks for volunteers to read responses for a quick review. Have
          students use a highlighter to mark the key ideas from their quick write that are mentioned during the
          review. The teacher will choose a student to write the responses on the board to have as further reminders.
        </p>`
    },
    {
      number: 3,
      title: 'Introduce Relevant Rules Handout',
      content: `
        <p>
          The teacher will introduce the Relevant Rules handout and explain how it summarizes the different
          characteristics of how to identify relevant resources when conducting research. Students are given 15–20
          minutes to annotate the handout. Before they begin the teacher can use a quick Red, Yellow, and Green Cup/Tile
          strategy or Think-Pair-Share strategy to ensure students are clear on how to annotate a text.
        </p>`
    },
    {
      number: 4,
      title: 'Gallery Walk',
      content: `
        <p>
          Review/Reinforce the Relevant Rules handout by creating a Gallery Walk activity. The teacher explain the
          following activity to the students. First, students will be paired into groups of 3–4. Each group will be an
          expert in one of the Relevant Rules. They will summarize their understandings on a posterboard and
          display it on a section of the wall. Each student makes contributions to the poster using their annotated
          handouts. With all posters displayed on the classroom walls students walk clockwise throughout the room
          to view each poster. Each group will briefly explain how their rule helps to identify a relevant resource.
        </p>`
    },
    {
      number: 5,
      title: 'Internet Search Activity',
      content: `
        <p>
          Together, the teacher leads a Think-Aloud to complete the first examples of the Internet Search Activity
          handout. As the teacher demonstrates how they will complete the first example, the students gain a better
          understanding on how to identify a relevant resource. Then, each student completes the other examples
          independently.
        </p>`
    },
    {
      number: 6,
      title: 'Relevant Sources Chart',
      content: `
        <p>
          Students will fill in a Relevant Sources Chart for a topic of their
          choice and rank the sources from most to least relevant. The teacher
          calls on students to see how they ranked their resources. The teacher
          can use a Muddiest Point strategy to help fill any gaps in students’
          understanding. Here, students write down any clarifying questions they
          have after they hear other responses from their peers.
        </p>`
    },
    {
      number: 7,
      title: 'Exit Ticket',
      content: `
        <p>
          Students will reflect on their learning by completing an Exit Ticket question, which is at the bottom of the
          Relevant Sources Chart handout. The short response should answer the question, “In 3–4 sentences explain
          how a source can be reliable (accurate and credible) but not relevant to your research?”
        </p>`
    }
  ],
  connectionsPlaylist: [{
    title: 'Research: Analyze Information',
    numberOfResources: 8,
    resourceId: 99,
    assessmentType: 3 // how will this be defined?
  }],
  // overview
  documents: [
    '/file_documents/400/download',
    '/file_documents/401/download',
    '/file_documents/402/download'
  ],
  videoLinks: [],
  differentiation: ``,
  accessibilityStrategies: [
    {
      title: 'Highlighter',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `A digital tool for marking desired text, item questions, item answers, or parts of
        these with a color. Highlighted text remains available throughout each test segment. `
    }
  ],
  formativeAssessmentProcess: {
    clarifyIntendedLearning: `
      <p>
        The teacher will explain the importance of the learning goal by explaining how not all reliable resources are
        necessarily useful or relevant for a research paper. It is essential that students understand that they will find plenty
        of reliable sources in their Internet searches, but the information in those sources might not speak to the purpose
        of a research paper. The teacher will start the lesson by reviewing students’ answers to the entrance ticket quick
        write question, which asks students to list and explain the different features of a reliable source before they delve
        deeper into understanding what a reliable and relevant source is. Students should use a highlighter to focus on
        any new learning from what they wrote or add more notes from what other students mention.
      </p>`,
    elicitEvidence: `
      <p>
        Students will complete a text annotation activity to understand the different rules regarding what makes a reliable
        source. Teachers can do a brief Red, Yellow, and Green Cup/Tile strategy or Think-Pair-Share strategy to ensure
        students are clear on how to annotate a text. Then, give the students the rules for a reliable source handout.
      </p>`,
    interpretEvidence: `
      <p>
        Students will be split into groups to complete a Gallery Walk activity where each group displays their
        understandings regarding the three rules of a relevant source.
      </p>`,
    actOnEvidence: `
      <p>
        Teachers might use a Muddiest Point strategy and have students respond with any lingering questions or
        concerns before they break into their independent research activity. This activity can also help teachers respond to
        students who haven't yet been able to demonstrate their understanding that a credible and accurate source isn’t
        always relevant to a research paper. Here are three basic criteria: (Again the purpose of this assignment is to
        determine whether the reliable source is relevant.)
        <ol>
        <li>The source must be credible. It is verifiable. Other sources corroborate the information from this
        source. Other texts include similar information. If the source is a person, then other authors
        reference that person as an authority, validating his or her expertise.</li>
        <li>The source must also be accurate. More than just making sure the information is not false, it must be
        completely true. It's not misleading or does not omit anything. Part of accuracy is also assessing
        whether the information is timely. The source has to be current, not outdated.</li>
        <li>The third criterion is that the source is relevant. The information addresses the thesis statement
        and/or answers the research question. Keep in mind, a source might be credible and accurate in its
        information, but if the information isn't about the topic, then it isn’t relevant.</li>
        </ol>
      </p>
      Feedback
      <p>
        Students will be given opportunities to be given feedback during and after they complete their quick write, Internet
        Search Activity, and Relevant Sources Chart.
      </p>
      Instructional Moves
      <p>
        The teacher may need to group students who are at or above standard with lower students for the Gallery Walk activity.
      </p>
    `
  },
  formativeStrategies: [
    {
      title: 'Exit Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Entrance Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Red, Yellow, and Green Cup/Tile',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Think-Pair-Share',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Gallery Walk',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Think-Aloud',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }, {
      title: 'Muddiest Point',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ],
  comments: `
    <p>
      Students should already have a good understanding of how to find the main point of an article and understand an
      author’s claims and evidence before starting this lesson. Also students might need some guided assistance in
      annotative reading. Finally, the Internet Search Activity might not be comfortable for some teachers; however,
      teens use of vaping drugs is becoming an epidemic. The author inserted this example for an opportunity to discuss
      a real-life example of how students can use research to make informed decisions.
      <ul>
        <li>Resource equity —This resource addresses an ELA writing standard regarding the research process. The strategies incorporated in this resource are all designed to support students with all learning levels.</li>
      </ul>
    </p>`
};

export const mockIrDocSearchingRelevantRules = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/400",
    "@type": "Handout",
    "id": 400,
    "name": "Relevant Rules.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocSearchingRelevantSourcesChart = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/401",
    "@type": "Handout",
    "id": 401,
    "name": "Relevant Sources Chart.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocSearchingInternetSearch = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/402",
    "@type": "Handout",
    "id": 402,
    "name": "Internet Search Activity.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrIntroToQuadFormula = {
  id: 11,
  resourceType: "Instructional and Professional Learning",
  title: "Intro to Quadratic Formula",
  author: "Chelsey Shade",
  publisher: "Smarter Balanced",
  subject: ["Math"],
  grades: ['HS'],
  educationalAlignments: [ // claims
    { title: 'Concepts & Procedures', shortName: '1' }
  ],
  standards: ['CCSS.MATH.CONTENT.A.REI.B.4'],
  targetAlignments: [ // targets
    { title: 'Solve equations and inequalities in one variable', shortName: 'I' }
  ],
  updated: "2019-07-31T11:29:37-0500",
  resourceThumbnail: mockIrImageQuad,
  altBody: `
    <p>
      This resource is designed for a block day lesson or two 45-minute
      lessons. This is an introductory lesson on using the quadratic formula to
      solve quadratic equations. The lesson contains an Entrance Ticket,
      exploration activity, guided notes, question-question-swap activity,  group
      activity, and Exit Ticket.
    </p>`,
  learningGoals: `
    <p>
      Students will solve quadratic equations in one variable with real roots by using the quadratic formula.
    </p>`,
  successCriteria: `
    <p>
      Students can write the quadratic formula.
    </p>
    <p>
      Students can identify the values for a, b, and c.
    </p>
    <p>
      Students can use the quadratic formula to solve for real roots.
    </p>`,
  steps: [
    {
      number: 1,
      title: 'Entrace Ticket',
      content: `
        <p>
          Project the Entrance Ticket (slide 2) using an overhead projector. If one is unavailable, then make copies for the students or write it on the board (Print On Demand). Everything is located on the Using the Quadratic Formula Intro Lesson presentation.
        </p>
        <p>
          Complete a Think-Pair-Share where students solve the problem individually, discuss with their partner, and then share out with the whole class. You can use Popsicle Sticks or an alternate method to call on a few students to share.
        </p>`
    },
    {
      number: 2,
      title: 'Learning Goal and Agenda',
      content: `
        <p>
          Post or share the learning goal and success criteria and the agenda with the class (slides 3 and 4, respectively).
        </p>
        <p>
          Read the learning goal and success criteria aloud to the class. Ask students whether they have any clarifying questions, or ask students clarifying questions by having them identify words they are unsure about. It is also helpful to have students write the learning goal and success criteria in a journal or on Scratch Paper and discuss them with a partner.
        </p>
        <p>
          Read the agenda aloud to the class.
        </p>`
    },
    {
      number: 3,
      title: 'Exploration',
      content: `
        <p>
          Project the exploration problems (slides 5–7) and give students 3–5 minutes to answer the questions on each slide individually.
        </p>
        <p>
          Have students do a Think-Pair-Share activity using the prompt on slide 8. Give students enough time to write down their individual thoughts to both questions on Scratch Paper, and then have them find a partner and share their answers with each other.
        </p>
        <p>
          Use a method to call on students to share what they talked about with their partner (e.g., Popsicle Sticks, random number generator, volunteers).
        </p>
        <p>
          Summarize the conversation for the entire class, ensuring that misconceptions are corrected and highlighting why they might want to use the quadratic formula instead of using other methods.
        </p>`
    },
    {
      number: 4,
      title: 'Notes',
      content: `
        <p>
          Project the notes on slides 9 and 10. It is recommended that you print the notes (Print On Demand) for students with visual impairments and visual perceptual difficulties or English learners with limited proficiency (e.g., NEPs). Additionally, you might want to create skeleton notes for students with higher levels of English proficiency (e.g., LEPs or FEPs) by removing some words on the slides so that they have to listen and fill in the empty spaces and highlight a, b, and c in the equation and formula. All other students should be able to write their own notes in a journal or notebook.
        </p>`
    },
    {
      number: 5,
      title: 'Question-Question-Swap',
      content: `
        <p>
          Print the Question-Question-Swap Cards back to back. Cut the cards out.
        </p>
        <p>
          Project slide 11 for the students to read the directions.
        </p>
        <p>
          Each student will receive a card with a quadratic equation on one side and the values for a, b, and c on the other. (If possible, print using colored ink, so the equations are in black font and the values are in red font.)
        </p>
        <p>
          Have students stand up, put their hands up, find another person with his/her hand up, and give each other a high five, to find their partners.
        </p>
        <p>
          Partner A shows the equation side to their partner.
        </p>
        <p>
          Partner B looks at the quadratic equation and identifies the values for a, b, and c.
        </p>
        <p>
          Partner A tells their partner whether he/she got the answer correct.
        </p>
        <p>
          Have students switch roles.
        </p>
        <p>
          Have students TRADE their cards and use the same method to find a new partner.
        </p>
        <p>
          Repeat as many times as needed. It is recommended to complete at least 3 cycles.
        </p>`
    },
    {
      number: 6,
      title: 'Notes',
      content: `
        <p>
          Project the notes on slides 12–14. It is recommended that you print the notes for students with IEPs or English learners with limited proficiency (e.g., NEPs). Additionally, you might want to create skeleton notes for students with higher levels of English proficiency (e.g., LEPs or FEPs) by removing some words on the slides so that they have to listen and fill in the empty spaces. All other students should be able to write their own notes in a journal or notebook.
        </p>`
    },
    {
      number: 7,
      title: 'Quadratic Formula Intro Activity',
      content: `
        <p>
          Print the quadratic formula scaffold (slide 16 or 17) (one per person) and place each in a sheet pocket/protector. Alternatively, you can have students place them in the pockets to save time. Slide 16 is meant to be used if you have access to a color printer. Slide 17 is meant to be used if you do not have access to a color printer.
        </p>
        <p>
          Print the first page of the Quadratic Formula Activity. Print enough copies to have one per group. Cut the cards out and create one deck per group. You can print the answer key for yourself and/or the students.
        </p>
        <p>
          Project slide 15 for the students to read the directions.
        </p>
        <p>
          Place students into groups of four. It is recommended that you create purposeful, heterogeneous groups. You can also create homogeneous groups and change the roots to non-real numbers for advanced students and perfect squares for students below target level. A calculator may be used for students whose basic math arithmetic skill is limited to help them to focus on the current instruction.
        </p>
        <p>
          Have each group identify a group leader.
        </p>
        <p>
          Group leaders get their card deck from you, place it in the center of the group, and turn the top card face up.
        </p>
        <p>
          All students write the equation on the first line; identify a, b, and c; place a, b, and c into the correct highlighted areas in the quadratic formula; use order of operations to finish solving the equation. Some students may need a Scribe, where a peer or an adult records what the student dictates on the worksheet.
        </p>
        <p>
          When everybody is done solving, they share their answers with the group. If everybody gets the same solution, the group leader turns the next card over and the group repeats the process. If somebody gets a different answer, the students should check their work, find the error, and correct it until everybody has the same solution(s).
        </p>
        <p>
          Repeat the process until the deck is finished or it is time for the Exit Ticket.
        </p>`
    }
  ],
  connectionsPlaylist: [{
    title: 'Solve Equations and Inequalities: Quadratic',
    numberOfResources: 8,
    resourceId: 99,
    assessmentType: 1 // how will this be defined?
  }],
  // overview
  documents: [
    '/file_documents/500/download',
    '/file_documents/501/download',
    '/file_documents/502/download'
  ],
  videoLinks: [],
  differentiation: undefined,
  accessibilityStrategies: [
    {
      title: 'Highlighter',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `A digital tool for marking desired text, item questions, item answers, or parts of
        these with a color. Highlighted text remains available throughout each test segment. `
    },
    {
      title: 'Print on Demand',
      link: '',
      description: ``
    },
    {
      title: 'Popsicle Sticks',
      link: '',
      description: ``
    },
    {
      title: 'Scratch Paper',
      link: '',
      description: ``
    },
    {
      title: 'Calculator',
      link: '',
      description: ``
    },
    {
      title: 'Scribe',
      link: '',
      description: ``
    }
  ],
  formativeAssessmentProcess: {
    clarifyIntendedLearning: `
      <p>
        The learning goal and success criteria are presented to the students after the Entrance Ticket. Read the learning goal and success criteria aloud to the class. Explain why the learning goal is important to learn. Ask the students whether they have any clarifying questions, or ask students clarifying questions by having them identify words they are unsure about. It is also helpful to have students write the learning goal and success criteria in a journal or on a piece of paper. Students can also discuss the learning goal and success criteria with a partner.
      </p>`,
    elicitEvidence: `
      <p>
        There are various methods for the teacher and students to elicit evidence during this lesson.
      </p>
      <p>
        The Entrance Ticket allows the teacher and students to see what students remember about factoring, which is a scaffold to the quadratic formula. Evidence is elicited during the Exploration Think-Pair-Share about how one might find the roots, without graphing, for a quadratic equation that cannot be factored (over the integers).
      </p>
      <p>
        The Question-Question-Swap activity allows students to elicit evidence from their partners about identifying the coefficients for a, b, and c. The Quadratic Formula Activity allows students to elicit evidence from their group members about their ability to use the quadratic formula to solve equations.
      </p>
      <p>
        Finally, the Exit Ticket allows the teacher to elicit evidence from each student about his/her ability to use the quadratic formula to solve an equation, whether they met the success criteria, and what questions they still have about the learning goal.
      </p>`,
    interpretEvidence: `
      <p>
        Rely on the learning goal and success criteria to evaluate students’ work. Make sure students are writing the quadratic formula correctly. Some look-fors are the inclusion of the plus-minus sign, making the b negative, and squaring the b value.
      </p>
      <p>
        When identifying the values for a, b, and c, many students do not realize that a subtraction sign means that the coefficient is negative. Additionally, many students often forget that the coefficient equals 1 if there is not a value written in front of the variable.
      </p>
      <p>
        Lastly, when using the quadratic formula to solve the equation, many students do not know how the negative sign in front of the b value affects the value of b. Many students also struggle with following order of operations when a square root is involved. The Quadratic Formula Activity is scaffolded to help students with these common struggles.
      </p>
      <p>
        The teacher and the students will be interpreting the evidence during the lesson. The teacher will be interpreting indirectly, through observations, while the students partake in the Exploration Think-Pair-Share, the Question-Question-Swap, and the Quadratic Formula Activity. Students will be interpreting their peers’ thinking directly during these activities. The teacher will be interpreting the students’ thinking directly on the Entrance and Exit Tickets. Students will also be interpreting their own abilities on the Exit Ticket.
      </p>`,
    actOnEvidence: `
      <p>
        There are many ways and opportunities for the teacher and students to act on evidence during this lesson. The Exploration Activity is designed knowing that students will struggle with the solution. Graphing the equation acts as a scaffold to help push students’ thinking. During this time, you should provide descriptive and prescriptive information to the students to help them decide what to do next.
      </p>
      <p>
        Students will be acting on evidence provided by their peers during several activities (partner and group). During the Question-Question-Swap, students have the answers in front of them, so they are able to tell their partners whether they are correct. The Quadratic Formula Activity is designed as a scaffold, using colors and chunking to facilitate the process. Students will be providing each other with descriptive and prescriptive information when they share their solutions with each other and work to find any errors.
      </p>
      <p>
        Teachers should be acting on evidence as they monitor and observe the students as they partake in the different activities. Teachers will act on evidence directly by reading Exit Tickets and using the information to modify instruction for the following lesson.
      </p>
      Feedback
      <p>
        Students will be providing verbal feedback to partners during the Exploration Think-Pair-Share and Question-Question-Swap activities. Students will be providing verbal feedback to their group members during the Quadratic Formula Activity.
      </p>
      <p>
        Teachers will be providing verbal feedback (and written, if necessary) as they monitor and observe the classroom as students partake in the activities. Teachers should provide written feedback on students’ Exit Tickets and return them during the following lesson.
      </p>
      Instructional Moves
      <p>
        There are a few look-fors in this activity. When identifying the values for a, b, and c, many students do not realize that a subtraction sign means that the coefficient is negative. Additionally, many students often forget that the coefficient equals 1 if there is not a value written in front of the variable. Lastly, when using the quadratic formula to solve the equation, many students do not know how the negative sign in front of the b value affects the value of b. Many students also struggle with following order of operations when a square root is involved. The Quadratic Formula Activity is scaffolded to help students with these common struggles.
      </p>
      <p>
        Many of the instructional moves will be made on-the-fly, such as modeling solving problems with negative coefficients or having groups check in with you after completing key problems. The activities are designed to provide scaffolding and differentiation within; however, if more differentiation is needed, change the problems on the Quadratic Formula Activity so that there are complex roots and integer roots for students above and below the target performance, respectively.
      </p>
      `
  },
  formativeStrategies: [
    {
      title: 'Think-Pair-Share',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Entrance Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Exit Ticket',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ],
  comments: ``
};

export const mockIrDocQuadPresentation = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/500",
    "@type": "Presentation",
    "id": 500,
    "name": "Using the Quadratic Formula Intro Lesson.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocQuadQQS = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/401",
    "@type": "Handout",
    "id": 501,
    "name": "Question-Question-Swap Quadratics.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockIrDocQuadActivity = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/402",
    "@type": "Activity",
    "id": 502,
    "name": "Quadratic Formula Activity.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockPlDeepeningUnderstandingOfFAP = {
  id: 12,
  title: 'Deepening Understanding and Use of the Formative Assessment Process',
  resourceType: "Professional Learning",
  author: 'Heidi Kroog & Amy Thierry',
  publisher: 'Smarter Balanced',
  updated: "2018-02-08T11:29:37-0500",
  resourceThumbnail: mockPlImageDeepeningUnderstandingOfFAP,
  altBody: `
    <p>
      This professional learning activity was created for the State Network of Educators 2018 Winter Workshop to calibrate a shared understanding of the formative assessment process. By using five different chat stations with multiple entry points into the formative assessment process, educators energetically reviewed data, watched and discussed videos, shared technology strategies, prepared an elevator speech, and reviewed expert text. The engagement and focus in this timed activity produced multiple shifts in thinking and provided educators with a renewed energy to embed student success criteria and opportunities for authentic feedback into instructional lesson planning.
    </p>`,
  learningGoals: `
    <p>
      Educators will gain an understanding of the learning benefits of embedding the formative assessment process with students during instruction.
    </p>`,
  successCriteria: `
    <p>
      Educators will use this professional learning activity to discuss how the formative process is embedded in instruction (e.g., establish success criteria with students prior to eliciting evidence, establish how they will provide actionable feedback to students, provide opportunities for students to self-evaluate their learning progress, etc.).
    </p>`,
  steps: [
    {
      number: 1,
      title: 'Slide 1',
      content: `
        <p>
          Facilitator will introduce the professional learning topic with learners. Use the PowerPoint slides to share overview of learning activity and to access the content.
        </p>`
    },
    {
      number: 2,
      title: 'Slide 2',
      content: `
        <p>
          Reminder: All professional learning is personal. The individual learner is at the center of the experience and will get of this opportunity what he or she puts into it. We all come to the table with different experiences, past learning, etc. Thus, it is important to remember and be attentive to what is “new learning,” what is “re-learning,” and what is something that we may need to “un-learn” (possibly a past misconception or a new shift in thinking).
        </p>`
    },
    {
      number: 3,
      title: 'Slide 3',
      content: `
        <p>
          Clarify intended learning with learners. Establish the success criteria together.
        </p>`
    },
    {
      number: 4,
      title: 'Slide 4-8',
      content: `
        <p>
          Give participants 2 minutes to review the data charts, 5 minutes to discuss, and 1 minute to reflect/jot notes.
        </p>`
    },
    {
      number: 5,
      title: 'Slide 9',
      content: `
        <p>
          Give the participants 2 minutes to review the Formative Assessment Process Flier, 5 minutes to complete the practice task(s), and 1 minute to share with a partner.
        </p>`
    },
    {
      number: 6,
      title: 'Slide 10-12',
      content: `
        <p>
          Give participants 30 seconds to review the purpose, 6 minutes to watch the videos and take notes, and 1.5 minutes to discuss.
        </p>`
    },
    {
      number: 7,
      title: 'Slide 13',
      content: `
        <p>
          Give participants 2 minutes to silently share/review, 5 minutes to discuss technology options, and 1 minute to jot a resource to try.
        </p>`
    },
    {
      number: 8,
      title: 'Slide 14',
      content: `
        <p>
          Give participants 8 minutes to complete the Quote Jigsaw.
        </p>`
    }
  ],
  documents: [
    '/file_documents/600/download',
    '/file_documents/601/download',
    '/file_documents/602/download',
    '/file_documents/603/download',
    '/file_documents/604/download'
  ],
  videoLinks: [],
  formativeStrategies: [
    {
      title: 'Think-Pair-Share',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Gallery Walk',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Jigsaw',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ],
  comments: `
    <p>
      These five stations can be used together or used individually as a learning series. Professional learning should be ongoing, job-embedded, and continuous. After the initial participation in the Gallery Walk, educators can use this resource to establish SMART goals to embed the formative assessment process in instructional practices.
    </p>`
};

export const mockPlDocDeepeningChatStations = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/600",
    "@type": "Presentation",
    "id": 600,
    "name": "Chat Stations.pptx",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pptx",
    "mimeType": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
};

export const mockPlDocGalleryWalk = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/601",
    "@type": "Document",
    "id": 601,
    "name": "Gallery Walk.docx",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.docx",
    "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

export const mockPlDocDeepeningTeamNorms = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/602",
    "@type": "Document",
    "id": 602,
    "name": "Team Norms Winter 2019.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockPlDocDeepeningGraphicOrganizer = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/603",
    "@type": "Document",
    "id": 603,
    "name": "Graphic Organizer for Gallery Walk.docx",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.docx",
    "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

export const mockPlDocDeepeningFAPExcerpt = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/604",
    "@type": "Document",
    "id": 604,
    "name": "FAP Excerpts for Gallery Walk.docx",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.docx",
    "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

export const mockPlFocusOnFeedback = {
  id: 13,
  title: 'Focus on Feedback',
  resourceType: "Professional Learning",
  author: 'Joe Moran & Amy Thierry',
  publisher: 'Smarter Balanced',
  updated: "2018-08-03T11:29:37-0500",
  resourceThumbnail: mockPlImageFocusOnFeedback,
  altBody: `
    <p>
      This professional learning activity is for individuals or teams who want to deepen their understanding of the power of feedback. Feedback is a foundational attribute of the formative assessment process. Giving, receiving, and using feedback can significantly impact both learning and teaching. Learners will watch and discuss four short videos focused on giving and receiving feedback. These videos focus on the different types of feedback and when they are effectively used to support learning.
    </p>`,
  learningGoals: `
    <p>
      Learners will develop or deepen their understanding of the different types of feedback we give and receive as educators.
    </p>`,
  successCriteria: `
    <p>
      <ol>
        <li>Learners will be able to explain different types of feedback (e.g. evaluative, task-based, ego-based, self-regulation, process, and descriptive feedback).</li>
        <li>Learners will be able to apply different types of feedback into their instructional practices with students and collaboratively with colleagues.</li>
      </ol>
    </p>`,
  steps: [
    {
      number: 1,
      title: 'Slide 1',
      content: `
        <p>
          Facilitator will introduce the professional learning topic with learners. Use the PowerPoint slides to share overview of learning activity and to access the videos and add personable content.
        </p>`
    },
    {
      number: 2,
      title: 'Slide 1',
      content: `
        <p>
          Reminder: All professional learning is personal. The individual learner is at the center of the experience and will get of this opportunity what he or she puts into it. We all come to the table with different experiences, past learning, etc. Thus, it is important to remember and be attentive to what is “new learning,” what is “re-learning,” and what is something that we may need to “un-learn” (possibly a past misconception or a new shift in thinking).
        </p>`
    },
    {
      number: 3,
      title: 'Slide 2',
      content: `
        <p>
          Clarify intended learning with learners. Review the learning goals and the success criteria.
        </p>`
    },
    {
      number: 4,
      title: 'Slide 3',
      content: `
        <p>
          Activate prior knowledge. Think about a time when feedback impacted you. It could be feedback that helped you attain a goal. Or, a non-example when feedback was given, but it wasn’t helpful, meaning that it did not impact future performance/practice.
        </p>`
    },
    {
      number: 5,
      title: 'Slide 4',
      content: `
        <p>
          Provide an overview of the learning activity. We will view 4 videos with a purpose using guiding questions and we will have a brief opportunity to discuss and reflect on the content in the video after each one with a partner.
        </p>`
    },
    {
      number: 6,
      title: 'Slide 5',
      content: `
        <p>
          Provide viewing options as needed for learners and the environment for viewing.
        </p>
        <p>
          • See Implementation Considerations on viewing options."
        </p>`
    },
    {
      number: 7,
      title: 'Slides 6-8',
      content: `
        <p>
          Set up each video with a brief look at the viewing questions. These are look-fors while viewing. Learners may want to jot down some notes during viewing. View the short clip, then provide 3 minutes of discussion time with a partner.
        </p>`
    },
    {
      number: 8,
      title: 'Slide 9',
      content: `
        <p>
          This is a longer video. Learners may want to view the clip in its entirety on their own later. This video is a bit longer than the other three. Review the questions, view, and provide 3 minutes to discuss.
        </p>`
    },
    {
      number: 9,
      title: 'Slide 10',
      content: `
        <p>
          Review success criteria. Ask learners to self-identify where they are on success criteria.
        </p>
        <p>
          <ul>
            <li>Question 1 (Explain)
              <ul>
                <li>Option 1: Thumbs up, down, sideways—can they explain at least two different types of feedback?</li>
                <li>Option 2: Fist to Five—ask learners to identify how many different types of feedback they can now explain. Fist is zero. Five is five different types. Use this information to determine next steps in professional learning on feedback.</li>
              </ul>
            </li>
            <li>Question 2 (Application)
              <ul>
                <li>Option 1: Ask how likely learners are to use one of the different types of feedback with students or colleagues today/tomorrow.</li>
                <li>Option 2: Observe over the next few days and collect examples of educators using the different types of feedback. This could be done in peer observations, self-identification, etc.</li>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          Give participants 8 minutes to complete the Quote Jigsaw.
        </p>`
    },
    {
      number: 10,
      title: 'Slide 11',
      content: `
        <p>
          Wrap up learning by reflection on the professional learning experience. As individuals, learners should reflect on the following: What did the learner learn, un-learn, and/or relearn?
        </p>`
    }
  ],
  documents: [
    '/file_documents/700/download',
    '/file_documents/701/download'
  ],
  videoLinks: [],
  formativeStrategies: [
    {
      title: 'Think-Pair-Share',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Thumbs Up/Thumbs Down',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Fist to Five',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ],
  comments: `
    <p>
      This learning activity was first presented to over 100 experienced educators in July 2018. Educators reported that this was a great use of their learning time, and a great activity to support student-centric learning and instruction, and it helped educators provide each other feedback as they worked collaboratively together.
    </p>
    <p>
      This was originally presented in a large banquet room, but it could be a walking activity. One idea is to set up a video opportunity (with laptops/projectors) in 4 different classrooms and have educators rotate in small groups from room to room to watch and discuss each video. Then, they could come back together at the end of the activity to debrief.
    </p>
    <p>
      Using the viewing guide, participants can view each video individually using the QR code. This can be used during the initial viewing activity or post viewing as educators review the videos to deepen their learning. Each viewing will prompt new layers for understanding and use.
    </p>`
};

export const mockPlDocFocusOnFeedbackPresentation = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/700",
    "@type": "Presentation",
    "id": 700,
    "name": "Focus On Feedback.pptx",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pptx",
    "mimeType": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
};

export const mockPlDocFocusOnFeedbackVideoNotes = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/602",
    "@type": "Document",
    "id": 602,
    "name": "Video ViewingNotes for Feedback.pdf",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.pdf",
    "mimeType": "application/pdf"
};

export const mockFas3ActTasks = {
  id: 14,
  resourceType: 'Formative Strategy',
  title: '3 Act Tasks',
  author: '',
  publisher: 'Smarter Balanced',
  updated: "2019-09-11T13:43:23-0500",
  resourceThumbnail: mockFasImage3ActTasks,
  // overview
  altBody: `
    <p>
      3 Act Task is a whole-group mathematics task consisting of three distinct parts: (1) Act One—an engaging and perplexing situation, (2) Act Two—an information and solution seeking session, and (3) Act Three—a solution discussion and reveal.
    <p>`,
  studentBenefits: `
    <p>
      Using this tool can help students:
      <ul>
        <li>to become engaged.</li>
        <li>by creating a need/urgency to know the solution and a desire to understand math.</li>
        <li>to persevere and take charge of their learning.</li>
        <li>by generating content discussion.</li>
        <li>to use estimation to determine reasonableness.</li>
      </ul>
    </p>`,
  suggestedMaterials: `
		<ul>
      <li>Image, video, or situation to be used for Act One. May require print outs for accessibility for some students.</li>
      <li>Pen/Pencil</li>
      <li>Paper to write responses/brainstorm</li>
		</ul>`,
  instructionalUse: `
    <ul>
      <li>Introduce new topics</li>
      <li>Create connections among topics</li>
      <li>Provide hands-on exploration of a problem</li>
    </ul>
    `,
  stepByStep: `
    <p>
      Discuss the learning goal and success criteria with the class and explain how this activity aligns with them.
    </p>
    <p>
      In <em>Act 1</em>, share with students an image, video, or other situation that is engaging and perplexing. Students discuss what they notice and wonder. They generate questions to ask about the situation. Students decide on a question to answer and make estimates about the likely solution.
    </p>
    <p>
      In <em>Act 2</em>, students work on finding solutions to their problems. They use information they have and ask for more information, as needed.
    </p>
    <p>
      In <em>Act 3</em>, students share their work, their thinking, and their solutions. The teacher reveals solution and facilitates the following discussion.
    </p>`,
  comments: `
    <p>
      <ul>
      <li>Allow students to talk to peers about what they notice and wonder in Act 1 to increase the sharing with the whole group.</li>
      <li>“Plant” a question by stating, “Last period my students asked this . . . What do you think about that?”</li>
      <li>Allow students to solve other questions that have been generated by the tasks.</li>
      <li>Break the 3-Act lessons into smaller parts, if needed.</li>
      </ul>
    </p>`,
  strategyInAction: `
    <h6>Clairfy</h6>
    <p>
      The teacher discusses the learning goal and success criteria with the class and explains how this activity aligns with them.
    </p>
    <h6>Elicit</h6>
    <p>
      The teacher elicits information from the students about the problem and/or each act.
    </p>
    <h6>Interpret</h6>
    <p>
      Students interpret the information using the learning goal and success criteria as guides and revise when given more information.
    </p>
    <h6>Act</h6>
    <p>
      The teacher acts after observing/listening to students during each “act.”  For example, a teacher could ask a guiding question to help students come to the correct solution.
    </p>`,
  documents: [
    "/api/file_documents/800/download"
  ]
};

export const mockFasDoc3ActTasksSample = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/800",
    "@type": "Sample",
    "id": 800,
    "name": "Dan Meyer's Three-Act Math Tasks.xlsx",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.xlsx",
    "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};

export const mockFas5MathProcesses = {
  id: 15,
  resourceType: 'Formative Strategy',
  title: '5 Math Processes',
  author: '',
  publisher: 'Smarter Balanced',
  updated: "2019-09-03T13:43:23-0500",
  resourceThumbnail: mockFasImage5MathProcesses,
  // overview
  altBody: `
    <p>
      5 Math Processes is a routine that uses student thinking to purposefully guide classroom discussions and make connections between solution strategies. The five practices are Predict, Observe, Elect, Order, and Connect.
    <p>`,
  studentBenefits: `
    <p>
      Using this tool can help students:
      <ul>
        <li>see other strategies for solving a problem.</li>
        <li>make connections between different strategies.</li>
        <li>deepen their understanding of content.</li>
      </ul>
    </p>`,
  suggestedMaterials: `
		<ul>
      <li>Document camera to display student work</li>
      <li>Poster paper for student work to be hung side by side to facilitate making connections</li>
		</ul>`,
  instructionalUse: `
    <ul>
      <li>Identify different strategies students are using </li>
      <li>Purposefully select which student work will be shared with class</li>
      <li>Purposefully order sharing of selected student work based on the goal of the discussion</li>
      <li>Make connections between different strategies</li>
    </ul>
    `,
  stepByStep: `
    <p>
      <strong>Predict</strong>—Once the learning goal has been decided and the task selected, identify the possible ways students might work through the task.
    </p>
    <p>
      <strong>Observe</strong>—Monitor students while working. Record which students are using which anticipated strategies, and which strategies are being used that were not anticipated.
    </p>
    <p>
      <strong>Elect</strong>—Determine which student work (or what parts of a student’s work) will be shared during the whole-group share out/discussion.
    </p>
    <p>
      <strong>Order</strong>—Determine the order in which the selected student work will be shared.
    </p>
    <p>
      <strong>Connect</strong>—Ask questions to guide students in connecting the selected work to deepen students’ understanding.
    </p>`,
  comments: `
    <p>
      <ul>
        <li>Select tasks that have multiple entry points and/or solution paths.</li>
        <li>Make a monitoring table that includes each of the anticipated strategies and space for additional strategies that were not anticipated with cells in which the names of students using each strategy can be recorded during the monitoring phase.</li>
        <li>When first using the 5 Math Processes, consider launching the task and providing work time during which the monitoring table is used to record students’ strategies. Collect student work and review it to plan for the share out. In planning for the sharing out the next day, Elect the work to be shared, the Order in which to share it, and the Connections that would be important to make. As the teacher becomes more fluent with the 5 Math Processes, the share out can happen during the same class period as the task launch and work time.</li>
        <li>Set/confirm norms for discussion etiquette.</li>
      </ul>
    </p>`,
  strategyInAction: `
    <h6>Clairfy</h6>
    <p>
      The teacher can clarify intended learning by purposefully selecting tasks aligned to learning goals. Students might ask questions during the launch to ensure they understand the purpose of the task and how it relates to the learning goal and success criteria.
    </p>
    <h6>Elicit</h6>
    <p>
      The teacher observes students as they work through the task identifying which strategies they are using, any misconceptions, or common errors, etc.
    </p>
    <h6>Interpret</h6>
    <p>
      The teacher will interpret the students’ work and solution strategies chosen using the learning goal and success criteria.
    </p>
    <h6>Act</h6>
    <p>
      The teacher will select which student work to use during the share-out based on the goals of the lesson. The teacher will determine the order in which that work will be shared to tell the “story” of the expected learning. The teacher will invite students to make connections between the different strategies students have used to deepen student understanding.
    </p>`,
  documents: [
    "/api/file_documents/900/download"
  ]
};

export const mockFasDoc5MathProcessesSample = {
    "@context": "/api/contexts/FileDocument",
    "@id": "/api/file_documents/900",
    "@type": "Sample",
    "id": 900,
    "name": "Monitoring Sheet for Task.png",
    "path": "35da9ccc78345eee8e31e4342ab1dd4ed8229c6f.png",
    "mimeType": "image/png"
};
