/* tslint:disable:max-line-length quotemark object-literal-key-quotes*/
import {
  mockEvidenceImage, mockResourceImage, mockProfImage, mockFormativeImage,
  mockAccessImage, mockPlaylistImg, mockPlImageDeepeningUnderstandingOfFAP,
  mockIrImageAnyWayYouSliceIt
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

  // overview
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
 
 Attachments in the dataset:

  ID  Title
  -----------------------------------------------------------------------------
  101 All Systems Go! Student Handout
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
  resourceThumbnail: 'https://smarterbalancedlibrary.org/sites/default/files/styles/resource_image_grid/public/resource_thumbnails/resource_cover_photos/all_systems_go.jpg',
  // overview
  altBody: 'This lesson uses students prior experience with graphical representations of systems to facilitate their understanding of solving systems algebraically. In this lesson, students will continue to engage with systems of equations where both equations are in the form y = mx + b . Students will graduate to other types of system structures. They will learn that examining structures is a good first step since it is sometimes possible to recognize an efficient method for solving the system through observation. Students see that if at least one of the equations has a single variable isolated, then that expression can be substituted into the other equation in place of y or x to get a single equation in one variable. Finally, students use the structure of a system of equations to reason about its lack of solutions.',
  learningGoals: `
    <ul>
      <li>Students will understand that a system of equations can have no solution, one solution, or infinitely many solutions.</li>
      <li>Students will solve systems algebraically.</li>
      <li>Students will solve systems of equations where two equations have different structures.</li>
      <li>Students will see and describe structure in systems of equations.</li>
    </ul>`,
  successCriteria: `
		<ul>
			<li>I can use the structure of equations to help me figure out how many solutions a system of equations has.
			<li>I can solve systems algebraically.
			<li>I can solve systems of equations where two equations have different structures.
		</ul>`,
  steps: [
    {
      number: 1,
      title: 'Materials',
      content: `
        <ul>
          <li>Scissors</li>
          <li>Straight edges</li>
          <li>Copy of backline master activity</li>
        </ul>`
    },
    {
      number: 2,
      title: 'Preparation',
      content: `
        <ul>
          <li>Print the blackline masters of the different types.
          <li>Prepare one set for every 2–3 students.
          <li>Provide access to straight edges for drawing accurate graphs and scissors for groups that wish to cut apart the graphs on the blackline masters.
        </ul>`
    },
    {
      number: 3,
      title: 'Entrance Ticket (5 minutes) - [Number Talk]',
      content: `
        <p>
          Step 1: Display each problem one at a time.<br/>
          Step 2: Give students 1 minute of individual think time. Ask students to give a signal when they have an answer and a strategy.<br/>
          Step 3: After the appropriate think time is provided, select students to share different strategies for each problem.<br/>
        </p>
        <p>
          Leave each problem displayed through the group discussion and display students’ thinking for all to see.
        </p>`
    },
    {
      number: 4,
      title: 'Activity 1 (Challenge Yourself)',
      content: `
        <p>
          In this activity, students solve systems of linear equations that lend themselves to substitution. There are 4 kinds of
          systems presented: one kind has both equations given with the y-value isolated on one side of the equation,
          another kind has one of the variables given as a constant, a third kind has one variable given as a multiple of the
          other, and the last kind has one equation given as a linear combination. This progression of systems nudges
          students toward the idea of substituting an expression in place of the variable it is equal to.
          Notice which kinds of systems students think are the least difficult to solve and which are the most difficult to
          solve.
        </p>
        <ul type=square>
          <li>Arrange students in groups of 2 or 3. (Give students appropriate minutes of individual think time.)
          <li>Encourage students to check in with their partner(s) between questions Think-Pair-Share. Tell students that if they disagree, they should work to reach agreement on an answer. The teacher may choose to support students with an appropriate sentence frame to guide discussions.
          <li>It is crucial that the teacher takes the time to monitor student’s individual processes and group discussions to create a list of understandings and misconceptions to highlight during Step 3.
          <li>Follow with a whole-class discussion.
          <li>Synthesize student understanding and misconceptions.
        </ul>
        <br/>
        Activity 1 (Synthesis)
        <p>
          There are two main take-aways to synthesize with students. The first is to formalize the idea of substitution in a
          system of equations. The second is to recognize systems where both equations are written with one variable
          isolated are actually special cases of substitution.
        </p>
        <p>
          Invite students to share which systems they thought would be easiest to solve and which would be hardest.
          To involve more students in the conversation, consider asking:
        </p>

        <ul type=square>
          <li>“Did you change your mind about any of the systems being more or less difficult after you solved them?”
          <li>“What was similar in these problems?”
          <li>“What was different?” (The systems vary slightly in how they are presented, but all of the problems can be solved by replacing a variable with an expression equal to it.)
          <li>“Will your strategy work for the other systems in this list?” (Yes, substitution works in all the given problems.)
        </ul>

        <p>
          Tell students that the underlying key concept for all of these problems is that it is helpful to replace a variable with
          the expression it is equal to, and that this “replacing” is called “substitution.” Point out that setting the expressions
          for y in the first two problems equal to each other is really substituting y in one equation with the expression it is
          equal to (as given by the other equation). It may be helpful for students to hear language like, “Since y is equal to
          -2x, that means wherever I see y, I can substitute in -2x .
        </p>
        <p>
          Some students may have trouble transitioning from systems where both equations are given with one variable
          isolated to other kinds of systems.
        </p>`
    },
    {
      number: 5,
      title: 'Activity 2 (Tyler\'s Justification)',
      content: `
        <p>
          In this activity, students are asked to make sense of Tyler’s justification for the number of solutions to the system of
          equations (MP3). This activity continues the emphasis on reasoning about the structure of an equation (MP7) and
          the focus should be on what, specifically, in the equations students think Tyler sees that makes him believe the
          system has no solutions.
        </p>
        <p>
          Step 1: To launch the activity tell students:
          <ul>
            <li>First, we’ll look at what Tyler says about the solution to a system of equations.
            <li>Next, we’ll decide whether we agree or disagree with him.
            <li>After that, we’ll have a class discussion.
          </ul>
        </p>
        <p>
          Step 2: Give students appropriate individual quiet think time to read the problem and decide whether they agree or
          disagree with Tyler. Critique, Connect, and Clarify with their partner and finish with a Quick Write activity.
        </p>
        <p>
          Step 3: After appropriate think time was provided, dedicate the remaining time to whole-class discussion.
        </p>
        <p>
          Step 4: Synthesize student learning.
          <ul>
            <li>Start with a Class Poll : Who agrees with Tyler? Who disagrees? Why?  The goal of the discussion is to look at one way to reason about the structure of a system of equations in order to determine the solution and then have students make their own reasoning about a different but similar system of equations.
            <li>If possible invite students from each side of the poll to explain their reasoning. Students’ previous Quick Write activity should help with this process.  As students explain, it should come out that Tyler is correct and if no students bring up the idea, make sure to point out that we can visualize this by graphing the equations in the system and noting that the lines look parallel and will never cross (project visualization of Tyler’s graph).
            <li>In the previous activity, students should have noticed that if they knew what one of the variables was equal to, they could substitute that value or expression into another equation in the same problem.
            <li>Point out that in this problem ( x + y ) can be replaced with 5, the resulting equation is 5 = 7, which cannot be true regardless of the choice of x and y.
          </ul>
        </p>`
    },
    {
      number: 6,
      title: 'Activity 3 (Whole Class)',
      content: `
        <p>
          Display the following equations and ask students how many solutions they think the system has and to give a signal
          when they think they know:
        </p>
        <p>
          4x + 2y = 8<br/>
          2x + y = 5
        </p>
        <p>
          When you observe the majority of the class signals they have an answer, invite several students to explain their
          thinking (possibly under a document camera if available).
          There are multiple ways students might reason about the number of solutions this system has. Bring up the
          following possibilities if no students do so in their explanations:
          <ul>
            <li>“Rewrite the second equation to isolate the y- variable and substitute the new expression into the first equation in order to find that the system of equations has no solutions.”
            <li>“Notice that both equations are lines with the same slope but different y -intercepts, which means the system of equations has no solutions.”
            <li>“Notice that 4 x + 2 y is double 2 x + y , but 8 is not 5 doubled, so the system of equations must have no solutions.”
          </ul>
        </p>
        <p>
          Entire Lesson Synthesis (Take time to summarize BIG ideas.)
        </p>
        <p>
        x = 2<br/>
        y = 3x - 1
        </p>
        <p>
        x = 2y + 4<br/>
        x = 9 - 3y
        </p>
        <p>
        x = 2y + 3<br/>
        y = 2x - 9
        </p>
        <p>
          To emphasize the concepts from this lesson, consider displaying the three systems and asking the following
          discussion questions:
          <ul style='list-style-type: none'>
            <li>"What is the first step you would take to solve the first system?"<br/>(Possible explanation: We already know the x -value of the solution, we only need to find the y -value. Substituting 2 for x in the other equation should help us solve for the y -value that makes both equations true when x is 2.)</li>
            <li>"What steps would you take to solve the second system?"<br/>(Possible explanation: We know two expressions that are equal to x , we can set those expressions as equal to each other. Therefore, we know that 2y + 4 = 9 - 3y, which can be solved using the techniques to solve equations with a single variable. Once we know the value for y , we can find the value for x from either of the original equations from the system.)</li>
            <li>"For the third system, a student begins the substitution method by writing <em>y = 2⋅2y + 3 - 9 then y = 4y - 6</em>. What has this student done wrong?"<br/> (Possible explanation: When substituting for <em>x</em>, the student did not multiply the entire expression by 2.)</li>
          </ul>
        <p>`
    },
    {
      number: 7,
      title: 'Exit Ticket',
      content: `
        <p>
          This Exit Ticket asks students to solve a system of equations presented in an algebraic form. (A coordinate plane
          purposefully is not provided. The main idea of this lesson is for students to use the substitution method, which is
          efficient and effective.)
        </p>
        <p>
        <p>
          Solve this system of equations:
        </p>
        <p>
          y = 2x<br/>
          x = -y + 6
        </p>
        <p>
          Student Response<br/>
          (2, 4)
        </p>
        <p>
          Sample response: Students may use the substitution method to rewrite the system as the one variable equation,
          x = (2x) + 6, and then solve.
        </p>
        <p>
          Self-Assessment: Self-assessment questions are provided at the end of the Google Slides for teacher use at the end
          of class alongside the Exit Ticket or as a homework assignment.
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
      title: 'Class Poll',
      link: 'https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf#page=9',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ],
  formativeAssessmentProcess: {
    clarifyIntendedLearning: `
      <p>
        Prior to this lesson: The teacher should use previous classroom data, such as formative assessments, to determine
        student readiness. It is highly recommended for the teacher to anticipate student misconceptions based on prior
        formative assessment results, previous lessons, and feedback shared with students.
      </p>
      <p>
        During the lesson: Think Pair Share opportunities are provided throughout each activity.
      </p>
      <p>
        Throughout the entire lesson, Strategic Questioning is used to guide students’ thinking toward using structures of
        equations to solve systems.
      </p>
      <p>
        In Activity 1: The teacher leads students through a “Challenge Yourself” activity as students self-assess by selecting
        a Red, Yellow, and Green Cup/Tile to provide a visual cue for their level of understanding.
      </p>
      <p>
        The evidence of learning is an Exit Ticket: This exit ticket asks students to solve a system of equations presented
        in an algebraic form. (A coordinate plane purposefully is not provided. The main idea of this lesson is for students
        to use the substitution method, which is efficient and effective.)
      </p>`,
    elicitEvidence: `
      <p>
      Prior to the lesson, teachers should complete every problem and anticipate misconceptions.
      </p>
      <p>
      The teacher will carefully monitor and assess students' responses to facilitate learning. During the lesson, the
      teacher will monitor answers provided from the students to evaluate any misconceptions in relationship to using
      structures to solve systems of equations. Teachers should monitor students’ thinking throughout each activity.
      </p>
      <p>
      Monitor both students’ independent work and group discussions to highlight student products that demonstrate
      the learning goals using different strategies.
      </p>`,
    interpretEvidence: `
      <p>
        The teacher can use the visual cues from the self-assessment with the Red, Yellow, Green
        and Cups/Tiles to arrange peer tutors or rearrange groups during activities. While monitoring student
        work/discussion, highlight student thinking that may help increase other students’ understanding. At the end of
        each activity, the teacher should take time to synthesize students’ thinking around the activity. The teacher will
        provide immediate Feedback to students during activity synthesis and use Strategic Questioning in order to
        clarify misconceptions and build on prior knowledge. The teacher will also use evidence from the Exit Ticket to
        plan next steps.
      </p>`,
    actOnEvidence: `
      Feedback
      <p>
        The teacher should circulate throughout the room and monitor students’ work/discussions and give
      prescriptive feedback on any misconceptions and understandings students have.
      </p>
      Instructional Moves
      <p>
        Many of the slides in the presentation include Teacher Notes. These notes detail which
        activities to use, which questions to ask, and how to respond to those questions or clarify the intended learning for
        that slide/word problem.
      </p>
      <p>
        The teacher should use the formal evidence from the Exit Ticket to decide whether additional practice is needed or
        whether students are ready to move on to a new lesson."
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
  resourceThumbnail: "https://smarterbalancedlibrary.org/sites/default/files/styles/resource_image_grid/public/resource_thumbnails/resource_cover_photos/a_grain_of_sand._a_drop_of_water.jpg",
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
            <li>The teacher can then display the Learning Goal (slide 3) for the students.  Identify different types of two-dimensional shapes from slicing a three-dimensional solid (i.e., rectangle, trapezoid, hexagon).</li>
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
    "mimeType": "application/pptx"
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
  resourceThumbnail: "https://smarterbalancedlibrary.org/sites/default/files/styles/resource_image_grid/public/resource_thumbnails/resource_cover_photos/search.jpg",
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
  resourceThumbnail: "https://smarterbalancedlibrary.org/sites/default/files/styles/resource_image_grid/public/resource_thumbnails/resource_cover_photos/intro_to_quadratic_formula_resource_card.jpg",
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
          Place students into groups of four.  It is recommended that you create purposeful, heterogeneous groups.  You can also create homogeneous groups and change the roots to non-real numbers for advanced students and perfect squares for students below target level. A calculator may be used for students whose basic math arithmetic skill is limited to help them to focus on the current instruction.
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
        The teacher and the students will be interpreting the evidence during the lesson. The teacher will be interpreting indirectly, through observations, while the students partake in the Exploration Think-Pair-Share, the Question-Question-Swap, and the Quadratic Formula Activity. Students will be interpreting their peers’ thinking directly during these activities. The teacher will be interpreting the students’ thinking directly on the Entrance and Exit Tickets.  Students will also be interpreting their own abilities on the Exit Ticket.
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
  title: 'Deepening Understanding of the Formative Assessment Process',
  resourceType: "Professional Learning",


};
