/*tslint:disable:max-line-length*/
import { InstructionalResource } from './resource/model/instructional.model';
import { AccessibilityStrategyResource } from './resource/model/accessibility-strategy.model';
import { FormativeStrategyResource } from './resource/model/formative-strategy.model';
import { ProfessionalLearningResource } from './resource/model/professional-learning.model';
import { PlaylistResource } from './resource/model/playlist.model';
import { ResourceType } from './resource/model/resource-type.enum';
import { ResourceSummary } from './resource/model/summary.model';
import { SearchFilters } from './search/search-filters.model';

const loremIpsum = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Integer at vulputate libero, sit amet gravida purus. Vivamus in condimentum
  risus. Pellentesque pulvinar eros porttitor urna hendrerit auctor. Sed vitae
  suscipit urna, nec viverra velit. Nunc lobortis bibendum varius. Sed et quam
  ornare, maximus tellus sed, fermentum mauris. Proin nisi lorem, tincidunt at
  felis quis, tincidunt congue purus. Ut et eros aliquet, lacinia est at,
  imperdiet leo. Fusce semper mi vitae augue tincidunt, nec commodo mauris
  vestibulum. Maecenas ultricies nunc id varius semper. Suspendisse id aliquet
  nulla. In congue quam pretium, volutpat orci id, molestie risus.</p> <p>Duis
  euismod lectus eget justo malesuada pellentesque. In dui ante, sollicitudin
  gravida laoreet sit amet, iaculis sit amet turpis. Donec in commodo diam, ut
  faucibus nunc. Cras cursus, eros sed varius vulputate, sapien purus laoreet
  tellus, vitae eleifend quam neque eu nisl. In faucibus fringilla ante, id
  egestas sapien finibus nec. Proin ut elit interdum, mollis ante in, porttitor
  orci. Sed laoreet pretium elit et vestibulum. Sed sed feugiat felis.</p>
  <p>Pellentesque eget semper ipsum. Aliquam pellentesque, urna ut pharetra
  varius, dolor augue maximus turpis, nec gravida nulla leo et turpis. Integer
  ex risus, posuere sed orci quis, malesuada iaculis sapien. Aenean convallis,
  dolor eu rhoncus sagittis, turpis tortor pellentesque augue, at finibus
  ligula libero malesuada urna. Maecenas eu erat eu risus aliquet rhoncus.
  Nulla eu pulvinar arcu. Integer suscipit efficitur turpis, sed condimentum
  ipsum imperdiet in.  Donec sed neque eu nisl aliquet pharetra vitae at odio.
  In rhoncus ac purus et dapibus. Suspendisse facilisis molestie enim, sagittis
  dictum augue viverra a. </p>`;

const shorterIpsum = `<p>Pellentesque eget semper ipsum. Aliquam pellentesque,
  urna ut pharetra varius, dolor augue maximus turpis, nec gravida nulla leo et
  turpis. Integer ex risus, posuere sed orci quis, malesuada iaculis sapien.
  Aenean convallis, dolor eu rhoncus sagittis, turpis tortor pellentesque
  augue, at finibus ligula libero malesuada urna. Maecenas eu erat eu risus
  aliquet rhoncus.  Nulla eu pulvinar arcu. Integer suscipit efficitur turpis,
  sed condimentum ipsum imperdiet in.  Donec sed neque eu nisl aliquet pharetra
  vitae at odio.  In rhoncus ac purus et dapibus. Suspendisse facilisis molestie
  enim, sagittis dictum augue viverra a. </p>`;

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockInstructionalResource: InstructionalResource = {
  id: 0,
  teaser: false,
  type: ResourceType.Instructional,
  properties: {
    authorOrg: '',
    authors: [''],
    claims: [],
    categories: [],
    grades: [],
    image: '',
    lastUpdatedDate: new Date(),
    standards: [],
    subject: {
      code: 'math',
      shortName: 'Math',
      fullName: 'Mathematics'
    },
    targets: [],
    title: ''
  },
  attachments: [],
  thingsToConsider: '',
  prefilteredIaipLink: "",
  getStarted: {
    overview: '',
    learningGoal: '',
    successCriteria: ''
  },
  stepByStep: [],
  accessibilityStrategies: [],
  formativeAssessmentStrategies: [],
  differentiation: '',
  formativeAssessHowTo: {
    clarify: '',
    elicit: '',
    interpret: '',
    act: ''
  },
  listConnectionsPlaylists: [],
  uaagTiers: []
};


export const initialSearchFilters: SearchFilters = {
  query: '',
  claims: [
    { code: 'ela-c2', title: '2: Writing' },
    { code: 'ela-c3', title: '3: Speaking & Listening' },
    { code: 'ela-c4', title: '4: Research/Inquiry' },
    { code: 'math-c1', title: '1: Concepts and Procedures' }
  ],
  grades: [
    { code: 'g3', title: 'Grade 3' },
    { code: 'g4', title: 'Grade 4' },
    { code: 'g5', title: 'Grade 5' },
    { code: 'g6', title: 'Grade 6' },
    { code: 'g7', title: 'Grade 7' },
    { code: 'g8', title: 'Grade 8' },
    { code: 'ghs', title: 'High School' }
  ],
  resourceTypes: [
    { code: 'ir', title: 'Instructional' },
    { code: 'cp', title: 'Connections Playlist' },
    { code: 'pl', title: 'Professional Learning' },
    { code: 'fs', title: 'Formative Assessment Strategy' },
    { code: 'as', title: 'Accessibility Strategy' }
  ],
  standards: [
    { code: 'ela-g3-l3a', title: 'L-3a' },
    { code: 'ela-g3-l6', title: 'L-6' },
    { code: 'ela-g3-sl2', title: 'SL-2' },
    { code: 'ela-g3-sl3', title: 'SL-3' },
    { code: 'ela-g4-l3a', title: 'L-3a' },
    { code: 'ela-g4-l6', title: 'L-6' },
    { code: 'ela-g4-sl2', title: 'SL-2' },
    { code: 'ela-g4-sl3', title: 'SL-3' },
    { code: 'ela-g4-w2d', title: 'W-2d' },
    { code: 'ela-g4-w3d', title: 'W-3d' },
    { code: 'ela-g5-sl2', title: 'SL-2' },
    { code: 'ela-g5-sl3', title: 'SL-3' },
    { code: 'ela-g5-w2d', title: 'W-2d' },
    { code: 'ela-g5-w3d', title: 'W-3d' },
    { code: 'ela-g6-l1', title: 'L-1' },
    { code: 'ela-g6-l2', title: 'L-2' },
    { code: 'ela-g6-l3a', title: 'L-3a' },
    { code: 'ela-g6-l3b', title: 'L-3b' },
    { code: 'ela-g6-l6', title: 'L-6' },
    { code: 'ela-g6-sl2', title: 'SL-2' },
    { code: 'ela-g6-sl3', title: 'SL-3' },
    { code: 'ela-g6-w2d', title: 'W-2d' },
    { code: 'ela-g6-w3d', title: 'W-3d' },
    { code: 'ela-g7-l1', title: 'L-1' },
    { code: 'ela-g7-l2', title: 'L-2' },
    { code: 'ela-g7-l3a', title: 'L-3a' },
    { code: 'ela-g7-l6', title: 'L-6' },
    { code: 'ela-g7-sl2', title: 'SL-2' },
    { code: 'ela-g7-sl3', title: 'SL-3' },
    { code: 'ela-g7-w2d', title: 'W-2d' },
    { code: 'ela-g7-w3d', title: 'W-3d' },
    { code: 'ela-g8-sl2', title: 'SL-2' },
    { code: 'ela-g8-sl3', title: 'SL-3' },
    { code: 'ela-ghs-l1', title: 'L-1' },
    { code: 'ela-ghs-l2', title: 'L-2' },
    { code: 'ela-ghs-l6', title: 'L-6' },
    { code: 'ela-ghs-sl2', title: 'SL-2' },
    { code: 'ela-ghs-sl3', title: 'SL-3' },
    { code: 'ela-ghs-w2d', title: 'W-2d' },
    { code: 'ela-ghs-w3d', title: 'W-3d' },
    { code: 'ela-ghs-w8', title: 'W-8' },
    { code: 'math-g3-g1', title: 'G-1' },
    { code: 'math-g3-g2', title: 'G-2' },
    { code: 'math-g3-nf1', title: 'NF-1' },
    { code: 'math-g3-nf2', title: 'NF-2' },
    { code: 'math-g3-nf2a', title: 'NF-2a' },
    { code: 'math-g3-nf3', title: 'NF-3' },
    { code: 'math-g3-nf3a', title: 'NF-3a' },
    { code: 'math-g3-nf3c', title: 'NF-3c' },
    { code: 'math-g3-nf3d', title: 'NF-3d' },
    { code: 'math-g3-oa8', title: 'OA-8' },
    { code: 'math-g3-oa9', title: 'OA-9' },
    { code: 'math-g4-g1', title: 'G-1' },
    { code: 'math-g4-g2', title: 'G-2' },
    { code: 'math-g4-g3', title: 'G-3' },
    { code: 'math-g4-nbt1', title: 'NBT-1' },
    { code: 'math-g4-nbt2', title: 'NBT-2' },
    { code: 'math-g4-nbt3', title: 'NBT-3' },
    { code: 'math-g5-g1', title: 'G-1' },
    { code: 'math-g5-g2', title: 'G-2' },
    { code: 'math-g5-g3', title: 'G-3' },
    { code: 'math-g5-g4', title: 'G-4' },
    { code: 'math-g6-rp1', title: 'RP-1' },
    { code: 'math-g6-rp2', title: 'RP-2' },
    { code: 'math-g6-rp3', title: 'RP-3' },
    { code: 'math-g6-rp3a', title: 'RP-3a' },
    { code: 'math-g6-rp3c', title: 'RP-3c' },
    { code: 'math-g6-rp3d', title: 'RP-3d' },
    { code: 'math-g6-sp1', title: 'SP-1' },
    { code: 'math-g6-sp2', title: 'SP-2' },
    { code: 'math-g6-sp3', title: 'SP-3' },
    { code: 'math-g6-sp4', title: 'SP-4' },
    { code: 'math-g6-sp5', title: 'SP-5' },
    { code: 'math-g7-ns1', title: 'NS-1' },
    { code: 'math-g7-ns1b', title: 'NS-1b' },
    { code: 'math-g7-ns1c', title: 'NS-1c' },
    { code: 'math-g7-ns1d', title: 'NS-1d' },
    { code: 'math-g7-ns2', title: 'NS-2' },
    { code: 'math-g7-ns3', title: 'NS-3' },
    { code: 'math-g8-ee8b', title: 'EE-8b' },
    { code: 'math-g8-f1', title: 'F-1' },
    { code: 'math-g8-f2', title: 'F-2' },
    { code: 'math-g8-f3', title: 'F-3' },
    { code: 'math-g8-f4', title: 'F-4' },
    { code: 'math-g8-f5', title: 'F-5' },
    { code: 'math-ghs-if1', title: 'IF-1' },
    { code: 'math-ghs-if3', title: 'IF-3' },
    { code: 'math-ghs-if4', title: 'IF-4' },
    { code: 'math-ghs-if5', title: 'IF-5' },
    { code: 'math-ghs-if6', title: 'IF-6' },
    { code: 'math-ghs-rei4b', title: 'REI-4b' },
    { code: 'math-ghs-srt6', title: 'SRT-6' },
    { code: 'math-ghs-srt7', title: 'SRT-7' },
    { code: 'math-ghs-srt8', title: 'SRT-8' }
  ],
  subjects: [
    { code: 'ela', title: 'English Language Arts' },
    { code: 'math', title: 'Mathematics' }
  ],
  targets: [
    { code: 'ela-c2-g3-t8', title: '8: Language & Vocabulary Use' },
    { code: 'ela-c2-g4-t8', title: '8: Language & Vocabulary Use' },
    { code: 'ela-c2-g5-t8', title: '8: Language & Vocabulary Use' },
    { code: 'ela-c2-g6-t8', title: '8: Language & Vocabulary Use' },
    { code: 'ela-c2-g6-t9', title: '9: Editing' },
    { code: 'ela-c2-g7-t8', title: '8: Language & Vocabulary Use' },
    { code: 'ela-c2-g7-t9', title: '9: Editing' },
    { code: 'ela-c2-ghs-t8', title: '8: Language & Vocabulary Use' },
    { code: 'ela-c2-ghs-t9', title: '9: Editing' },
    { code: 'ela-c3-g3-t4', title: '4: Listen and Interpret' },
    { code: 'ela-c3-g4-t4', title: '4: Listen and Interpret' },
    { code: 'ela-c3-g5-t4', title: '4: Listen and Interpret' },
    { code: 'ela-c3-g6-t4', title: '4: Listen and Interpret' },
    { code: 'ela-c3-g7-t4', title: '4: Listen and Interpret' },
    { code: 'ela-c3-g8-t4', title: '4: Listen and Interpret' },
    { code: 'ela-c3-ghs-t4', title: '4: Listen and Interpret' },
    { code: 'ela-c4-ghs-t3', title: '3: Evaluate Information / Sources' },
    { code: 'math-c1-g3-td', title: 'D: Solve problems involving the four operations, and identify and explain patterns in arithmetic' },
    { code: 'math-c1-g3-tf', title: 'F: Develop understanding of fractions as numbers' },
    { code: 'math-c1-g3-tk', title: 'K: Reason with shapes and their attributes' },
    { code: 'math-c1-g4-td', title: 'D: Generalize place value understanding for multi-digit whole numbers' },
    { code: 'math-c1-g4-tl', title: 'L: Draw and identify lines and angles, and classify shapes by properties of their lines and angles' },
    { code: 'math-c1-g5-tj', title: 'J: Graph points on the coordinate plane to solve real-world and mathmatical problems' },
    { code: 'math-c1-g5-tk', title: 'K: Classify two-dimensional figures into categories based on their properties' },
    { code: 'math-c1-g6-ta', title: 'A: Understand ratio concepts and use ratio reasoning to solve problems' },
    { code: 'math-c1-g6-ti', title: 'I: Develop an understanding of statistics variability' },
    { code: 'math-c1-g6-tj', title: 'J: Summarize and describe distributions' },
    { code: 'math-c1-g7-tb', title: 'B: Apply and extend previous understandings of operations with fractions to add, subtract, multiply, and divide rational numbers' },
    { code: 'math-c1-g8-td', title: 'D: Analyze and solve linear equations and pairs of simultaneous linear equations' },
    { code: 'math-c1-g8-te', title: 'E: Define, evaluate, and compare functions' },
    { code: 'math-c1-g8-tf', title: 'F: Use functions to model relationships between quantities' },
    { code: 'math-c1-ghs-ti', title: 'I: Solve equations and inequalities in one variable' },
    { code: 'math-c1-ghs-tk', title: 'K: Understand the concept of a function and use function notation' },
    { code: 'math-c1-ghs-tl', title: 'L: Interpret functions that arise in applications in terms of the context' },
    { code: 'math-c1-ghs-to', title: 'O: Define trigonometric ratios and solve problems involving right triangles' }
  ]
};

export const teaserIRContent: InstructionalResource = {
  id: 200,
  type: ResourceType.Instructional,
  teaser: false,
  listConnectionsPlaylists: [],
  properties: {
    authorOrg: '',
    authors: [
      'Angie Shindelar',
      'Robert Parkin'
    ],
    categories: [],
    claims: [
      {
        code: 'math-c1',
        number: 1,
        title: 'Concepts and Procedures'
      }
    ],
    grades: [
      {
        code: 'g6',
        shortName: '6',
        longName: 'Grade 6'
      }
    ],
    image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/200/image.png',
    lastUpdatedDate: new Date('2020-01-01T12:00:01.000Z'),
    standards: [
      {
        code: 'math-g6-rp3a',
        title: 'RP-3a',
        description: 'Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane. Use tables to compare ratios.'
      }
    ],
    subject: {
      code: 'math',
      shortName: 'Math',
      fullName: 'Mathematics'
    },
    targets: [
      {
        code: 'math-c1-g6-ta',
        number: 'A',
        description: 'Understand ratio concepts and use ratio reasoning to solve problems',
        group: ''
      }
    ],
    title: 'Come to the Table'
  },
  uaagTiers: [],
  attachments: [
    {
      category: 'Supplemental Material',
      fileType: 6,
      fileExtension: 'docx',
      name: 'Tools',
      uri: 'https://invalid.uri',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    {
      category: 'Handout',
      fileType: 6,
      fileExtension: 'docx',
      name: 'Solve and Discuss',
      uri: 'https://invalid.uri',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    {
      category: 'Handout',
      fileType: 6,
      fileExtension: 'docx',
      name: 'Instructional Worksheet',
      uri: 'https://invalid.uri',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    {
      category: 'Handout',
      fileType: 6,
      fileExtension: 'docx',
      name: 'Independent Practice',
      uri: 'https://invalid.uri',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    {
      category: 'Handout',
      fileType: 6,
      fileExtension: 'docx',
      name: 'Entrance Ticket',
      uri: 'https://invalid.uri',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    {
      category: 'Handout',
      fileType: 4,
      fileExtension: 'pdf',
      name: 'Entrance Ticket Images Printout',
      uri: 'https://invalid.uri',
      mimeType: 'application/pdf'
    }
  ],
  getStarted: {
    overview: '<p>This lesson will show students how to make and use equivalent ratio tables to find a missing value.</p>',
    learningGoal: '<ul>\r\n<li>Students will know how to create an equivalent ratio table.</li>\r\n<li>Students will use an equivalent ratio table to find a missing value.</li>\r\n</ul>',
    successCriteria: '<ul>\r\n<li>I can create a ratio table.</li>\r\n<li>I can find a missing value in a ratio table.</li>\r\n</ul>'
  },
  stepByStep: [
    {
      orderingIndex: 1,
      title: 'Lesson Preparation',
      content: loremIpsum,
    },
    {
      orderingIndex: 2,
      title: 'Entrance Ticket',
      content: loremIpsum,
    },
    {
      orderingIndex: 3,
      title: 'Activity 1: Solve & Discuss',
      content: loremIpsum,
    },
    {
      orderingIndex: 4,
      title: 'Model Time!',
      content: loremIpsum,
    },
    {
      orderingIndex: 5,
      title: 'Guiding Time!',
      content: loremIpsum,
    },
    {
      orderingIndex: 6,
      title: 'Independent Time!',
      content: loremIpsum,
    }
  ],
  accessibilityStrategies: [
    {
      id: 59,
      type: ResourceType.AccessibilityStrategy,
      title: 'Highlighter',
      description: '<p>A digital tool for marking desired text, item questions, item answers, or parts of these with a color.</p>'
    },
    {
      id: 64,
      type: ResourceType.AccessibilityStrategy,
      title: 'Scratch Paper',
      description: '<p>Scratch paper to make notes, write computations, or record responses may be made available to students.</p>'
    }
  ],
  formativeAssessmentStrategies: [
    {
      id: 43,
      type: ResourceType.FormativeStrategy,
      title: 'Think-Pair-Share ',
      description: '<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>'
    },
    {
      id: 21,
      type: ResourceType.FormativeStrategy,
      title: 'Fist to Five ',
      description: '<p>Teachers ask students to show anywhere from zero to five fingers to signal their level of understanding. This is a quick strategy for teachers and students to evaluate their current level of understanding.</p>'
    },
    {
      id: 51,
      type: ResourceType.FormativeStrategy,
      title: 'Peer-to-Peer Feedback',
      description: '<p>This strategy utilizes students as teachers to clarify learning. In pairs, the first student teaches or summarizes the content for their partner. The second student provides feedback on the quality and clarity of the information presented from the first student.</p>'
    },
    {
      id: 18,
      type: ResourceType.FormativeStrategy,
      title: 'Entrance Ticket',
      description: '<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>'
    }
  ],
  thingsToConsider: '<ul>\r\n<li>Keep in mind that ratio tables are ways to record one&rsquo;s thought processes and that there are several ways to solve these problems.</li>\r\n<li>Many students will have used in the past (and may attempt to use) skip-counting to find the missing values in a table and may become frustrated if this is not feasible with the values given.</li>\r\n<li>If an addition pattern is not apparent with the table, students can use multiplication and/or division patterns to solve or possibly create an addition pattern by inserting missing rows.</li>\r\n</ul>',
  prefilteredIaipLink: "",
  differentiation: '',
  formativeAssessHowTo: {
    clarify: loremIpsum,
    elicit: loremIpsum,
    interpret: loremIpsum,
    act: loremIpsum,
  },
  /*
  listConnectionsPlaylists: [
    {
      id: 229,
      title: 'Ratios and Proportional Relationships',
      count: 4,
      image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/svg/Math_6-7_Ratio-and-Proportional-Relationships.svg'
    }
  ]
  */
};

export const teaserFAContent: FormativeStrategyResource = {
  id: 23,
  type: ResourceType.FormativeStrategy,
  teaser: false,
  properties: {
    authorOrg: 'Smarter Balanced',
    authors: [],
    categories: [],
    claims: [],
    grades: [],
    image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/23/Gallery+Walk_+-+Serene+Cook.png',
    lastUpdatedDate: new Date('2020-01-01T12:00:00.000Z'),
    standards: [],
    subject: {
      code: null,
      shortName: null,
      fullName: null
    },
    targets: [],
    title: 'Gallery Walk'
  },
  uaagTiers: [],
  overview: {
    overview: '<p>This discussion technique allows students to be actively engaged as they walk through the classroom. They share ideas and respond to meaningful questions, documents, images, problem-solving situations, or texts individually or in small groups.</p>',
    studentBenefits: '<p>Using this tool can help students:</p>\r\n<ul>\r\n<li>analyze information.</li>\r\n<li>reflect on learning.</li>\r\n<li>actively listen.</li>\r\n<li>provide peer feedback.</li>\r\n<li>practice using oral and written language.</li>\r\n<li>observe a new way to solve a problem.</li>\r\n<li>create questions.</li>\r\n</ul>',
    suggestedMaterials: '<ul>\r\n<li>Content (e.g., objects, pictures, or student work)</li>\r\n<li>Chart paper</li>\r\n<li>Handouts with discussion question(s) or prompts (if needed)</li>\r\n<li>Notebooks</li>\r\n<li>Writing utensil</li>\r\n<li>Sticky Notes</li>\r\n</ul>'
  },
  attachments: [
    {
      category: 'Sample',
      fileType: 6,
      fileExtension: 'docx',
      name: 'Gallery Walk Sample',
      uri: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/23/Gallery+Walk_Sample+-+Serene+Cook.docx',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    }
  ],
  stepByStep: loremIpsum,
  thingsToConsider: loremIpsum,
  prefilteredIaipLink: "",
  strategyInAction: {
    clarify: '<p>The teacher discusses the learning goal and success criteria with the class and explains how this activity aligns with them.</p>',
    elicit: '<p>Students&rsquo; knowledge and thoughts are elicited as they respond to the item and/or their peers&rsquo; comments/questions.</p>',
    interpret: '<p>The teacher and students interpret the students&rsquo; knowledge of and thoughts about the items as they move through the stations.</p>',
    act: '<p>Students can act on their peers&rsquo; comments/questions through written responses. The teacher should act accordingly as they interprets the questions, comments, and discussions at each station. For example, the teacher could ask a group a leading question to help them get to the next level of understanding.</p>'
  }
};

export const teaserASContent: AccessibilityStrategyResource = {
  id: 68,
  type: ResourceType.AccessibilityStrategy,
  teaser: false,
  properties: {
    authorOrg: 'Smarter Balanced',
    authors: [],
    categories: [],
    claims: [],
    grades: [],
    image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/68/Writing+Tools+-+Serene+Cook.png',
    lastUpdatedDate: new Date('2020-01-01T12:00:00.000Z'),
    standards: [],
    subject: {
      code: 'ut',
      shortName: 'UT',
      fullName: 'Universal Tool'
    },
    targets: [],
    title: 'Writing Tools'
  },
  uaagTiers: [],
  overview: {
    overview: '',
    studentBenefits: '',
    suggestedMaterials: ''
  },
  instructionalUse: loremIpsum,
  attachments: [],
  thingsToConsider: loremIpsum,
  prefilteredIaipLink: "",
  sampleItemContent: {
    overview: '<p>Select writing tools (i.e., bold, italic, bullets, undo/redo) are available for all student-generated responses.</p>',
    linkToSample: 'https://sampleitems.smarterbalanced.org/BrowseItems',
    description: '<p>To access the tool, first navigate to any sample item that has <em>Writing Extended </em>listed as the Item Type. Click on the two arrows to expand the passage. The Writing Tools are available in the text box of the response area.</p>'
  }
};

export const teaserPLContent: ProfessionalLearningResource = {
  id: 247,
  type: ResourceType.ProfessionalLearning,
  teaser: false,
  properties: {
    authorOrg: 'Smarter Balanced',
    authors: [],
    categories: [],
    claims: [],
    grades: [],
    image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/247/247.jpg',
    lastUpdatedDate: new Date('2020-01-01T12:00:01.000Z'),
    standards: [],
    subject: {
      code: null,
      shortName: null,
      fullName: null
    },
    targets: [],
    title: 'IAB Use 4: Using IABS as a Tool to Support Student Mastery'
  },
  uaagTiers: [],
  overview: {
    overview: '',
    learningGoal: '',
    successCriteria: ''
  },
  attachments: [
    {
      category: 'Supplemental Material',
      fileType: 4,
      fileExtension: 'pdf',
      name: 'Interim Assessments Overview',
      uri: 'https://invalid.uri',
      mimeType: 'application/pdf'
    },
    {
      category: 'Supplemental Material',
      fileType: 4,
      fileExtension: 'pdf',
      name: 'IAB Use 4: Presenter Notes',
      uri: 'https://invalid.uri',
      mimeType: 'application/pdf'
    },
    {
      category: 'Sample',
      fileType: 4,
      fileExtension: 'pdf',
      name: 'IAB Use: Year at a Glance (Sample)',
      uri: 'https://invalid.uri',
      mimeType: 'application/pdf'
    },
    {
      category: 'Presentation',
      fileType: 5,
      fileExtension: 'pptx',
      name: 'IAB Use 4: Using IABS as a Tool to Support Student Mastery',
      uri: 'https://invalid.uri',
      mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    },
    {
      category: 'Handout',
      fileType: 4,
      fileExtension: 'pdf',
      name: 'IAB Use 4: Planning Guide ',
      uri: 'https://invalid.uri',
      mimeType: 'application/pdf'
    },
    {
      category: 'Handout',
      fileType: 6,
      fileExtension: 'docx',
      name: 'IAB Use 4 Survey Questions',
      uri: 'https://invalid.uri',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    }
  ],
  stepByStep: [
    {
      orderingIndex: 1,
      title: 'Clarify Intended Learning',
      content: loremIpsum,
    },
    {
      orderingIndex: 2,
      title: 'Presentation',
      content: loremIpsum,
    },
    {
      orderingIndex: 3,
      title: 'Discussion ',
      content: loremIpsum,
    },
    {
      orderingIndex: 4,
      title: 'Wrap Up',
      content: loremIpsum,
    },
    {
      orderingIndex: 5,
      title: 'Follow Up',
      content: loremIpsum,
    }
  ],
  formativeAssessmentStrategies: [
    {
      id: 38,
      type: ResourceType.FormativeStrategy,
      title: 'Stars and Stairs',
      description: '<p>This strategy provides students with information about what they did well in meeting the learning goal (the stars) and what the student needs to do (the stairs) to meet all the learning goals. Stars and Stairs feedback can come from the teacher, peers, or the students themselves.</p>'
    },
    {
      id: 43,
      type: ResourceType.FormativeStrategy,
      title: 'Think-Pair-Share ',
      description: '<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>'
    }
  ],
  thingsToConsider: loremIpsum,
  prefilteredIaipLink: "",
};

export const teaserCPContent: PlaylistResource = {
  id: 213,
  type: ResourceType.ConnectionsPlaylist,
  teaser: false,
  properties: {
    authorOrg: 'Smarter Balanced',
    authors: [
      'Smarter Balanced Educators'
    ],
    categories: [],
    claims: [
      {
        code: 'ela-c2',
        number: 2,
        title: 'Writing'
      }
    ],
    grades: [
      {
        code: 'g6',
        shortName: '6',
        longName: 'Grade 6'
      }
    ],
    image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/svg/ELA_Langauge-and-Vocabulary-Use.svg',
    lastUpdatedDate: new Date('2020-01-01T12:00:01.000Z'),
    standards: [
      {
        code: 'ela-g6-l3a',
        title: 'L-3a',
        description: 'Choose language that expresses ideas precisely and concisely, recognizing and eliminating wordiness and redundancy.*'
      },
      {
        code: 'ela-g6-l6',
        title: 'L-6',
        description: 'Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases; gather vocabulary knowledge when considering a word or phrase important to comprehension or expression.'
      }
    ],
    subject: {
      code: 'ela',
      shortName: 'ELA',
      fullName: 'English Language Arts'
    },
    targets: [
      {
        code: 'ela-c2-g6-t8',
        number: '8',
        description: 'Language & Vocabulary Use',
        group: ''
      }
    ],
    title: 'Language and Vocabulary Use'
  },
  uaagTiers: [],
  overview: {
    description: '<p>Students can produce effective and well-grounded writing for a range of purposes and audiences strategically using precise language and vocabulary (including academic words, domain-specific vocabulary, and figurative language) and style appropriate to the purpose and audience when revising or composing texts.</p>',
    importance: '<ul>\r\n<li>Express ideas precisely.</li>\r\n<li>Use specific vocabulary that conveys shades of meaning.</li>\r\n<li>Determine appropriate vocabulary to convey experiences or events and/or to explain a topic.</li>\r\n<li>To ensure that a student&rsquo;s or author&rsquo;s message (for purpose and audience) comes through as intended, by using precise language and phrasing.</li>\r\n</ul>',
    academicVocabulary: '<p>voice, tone, audience and purpose for writing (narrative, explanatory/informational, argumentative), concise and precise, concrete language, context [clues], figurative language, genre, phrase [note: students do not need to know the grammatical names of these phrases. Most&mdash;but not all&mdash;phrases used will include appositives, prepositional phrases, or verbal phrases (participial, gerund)], revise, sensory details, style, synonym, vocabulary in context, claim, counterclaim, convince</p>',
    interventionSuggestions: '<ul>\r\n<li>Scaffold lessons for students by providing a list of vocabulary, including synonyms.</li>\r\n<li>Have students work in pairs to generate precise words.</li>\r\n<li>Use technology resources to identify precise words or synonyms.</li>\r\n</ul>'
  },
  topics: [
    {
      title: 'Precise Words / Phrases',
      below: shorterIpsum,
      near: shorterIpsum,
      above: shorterIpsum,
      topicResources: [
        {
          id: 120,
          title: 'Convey It Right: Be Precise',
          type: ResourceType.Instructional
        }
      ]
    },
    {
      title: 'Language and Vocabulary in Narrative Text',
      below: shorterIpsum,
      near: shorterIpsum,
      above: shorterIpsum,
      topicResources: [
        {
          id: 119,
          title: 'Back Words Vocabulary',
          type: ResourceType.Instructional
        }
      ]
    },
    {
      title: 'Language and Vocabulary in Argumentative Text',
      below: shorterIpsum,
      near: shorterIpsum,
      above: shorterIpsum,
      topicResources: []
    },
    {
      title: 'Language and Vocabulary in Explanatory Text',
      below: shorterIpsum,
      near: shorterIpsum,
      above: shorterIpsum,
      topicResources: [
        {
          id: 122,
          title: 'Word Hunt!',
          type: ResourceType.Instructional
        }
      ]
    },
    {
      title: 'Sensory / Figurative Language',
      below: shorterIpsum,
      near: shorterIpsum,
      above: shorterIpsum,
      topicResources: [
        {
          id: 121,
          title: 'Shades of Meaning: From Vague to Precise',
          type: ResourceType.Instructional
        }
      ]
    }
  ],
  thingsToConsider: loremIpsum,
  prefilteredIaipLink: "",
  attachments: []
};
