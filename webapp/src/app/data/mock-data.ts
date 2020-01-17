import { InstructionalResource } from './resource/model/instructional.model';
import { ResourceType } from './resource/model/resource-type.enum';
import { ResourceSummary } from './resource/model/summary.model';
import { SearchFilters } from './search/search-filters.model';

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockInstructionalResource: InstructionalResource = {
  id: 0,
  type: ResourceType.Instructional,
  properties: {
    authorOrg: '',
    authors: [''],
    claims: [],
    grades: [],
    image: '',
    isBookmarked: false,
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
  }
};

export const mockResourceSummaries: ResourceSummary[] = [

  {
    "id": 200,
    "type": ResourceType.Instructional,
    hasNotes: false,
    summary: "<p>This lesson will show students how to make and use equivalent ratio tables to find a missing value.</p>",
    "properties": {
      "authorOrg": "",
      "authors": [
        "Angie Shindelar",
        "Robert Parkin"
      ],
      "claims": [
        {
          "code": "math-c1",
          "number": 1,
          "title": "Concepts and Procedures"
        }
      ],
      "grades": [
        {
          "code": "g6",
          "shortName": "6",
          "longName": "Grade 6"
        }
      ],
      "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/200/image.png",
      "isBookmarked": false,
      "lastUpdatedDate": new Date("2020-01-01T12:00:01+00:00"),
      "standards": [
        {
          "code": "math-g6-rp3a",
          "title": "RP-3a",
          "description": "Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane. Use tables to compare ratios."
        }
      ],
      "subject": {
        "code": "math",
        "shortName": "Math",
        "fullName": "Mathematics"
      },
      "targets": [
        {
          "code": "math-c1-g6-ta",
          "number": "A",
          "description": "Understand ratio concepts and use ratio reasoning to solve problems",
          "group": ""
        }
      ],
      "title": "Come to the Table"
    },

  },
  {
    "id": 126,
    "type": ResourceType.Instructional,
    hasNotes: false,
    summary: "<p>In this task, students will listen to a short nonfiction article about the moon landing. They will take notes on a provided document, and be able to summarize and identify the central idea of the text.</p>",
    "properties": {
      "authorOrg": "",
      "authors": [
        "Brendan Lynch"
      ],
      "claims": [
        {
          "code": "ela-c3",
          "number": 3,
          "title": "Speaking & Listening"
        }
      ],
      "grades": [
        {
          "code": "g5",
          "shortName": "5",
          "longName": "Grade 5"
        }
      ],
      "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/126/Moon+-+Brendan+Lynch.png",
      "isBookmarked": false,
      "lastUpdatedDate": new Date("2020-01-01T12:00:01+00:00"),
      "standards": [
        {
          "code": "ela-g5-sl2",
          "title": "SL-2",
          "description": "Summarize a written text read aloud or information presented in diverse media and formats, including visually, quantitatively, and orally."
        }
      ],
      "subject": {
        "code": "ela",
        "shortName": "ELA",
        "fullName": "English Language Arts"
      },
      "targets": [
        {
          "code": "ela-c3-g5-t4",
          "number": "4",
          "description": "Listen and Interpret",
          "group": ""
        }
      ],
      "title": "To The Moon: Finding Central Idea"
    }
  }
];

export const initialSearchFilters: SearchFilters = {
  query: '',
  claims: [
    { code: 'ela-c2',   title: 'Writing' },
    { code: 'ela-c3',   title: 'Speaking & Listening' },
    { code: 'ela-c4',   title: 'Research/Inquiry' },
    { code: 'math-c1',  title: 'Concepts and Procedures' }
  ],
  grades: [
    { code: 'g3',   title: 'Grade 3' },
    { code: 'g4',   title: 'Grade 4' },
    { code: 'g5',   title: 'Grade 5' },
    { code: 'g6',   title: 'Grade 6' },
    { code: 'g7',   title: 'Grade 7' },
    { code: 'g8',   title: 'Grade 8' },
    { code: 'g9',   title: 'Grade 9' },
    { code: 'g10',  title: 'Grade 10' },
    { code: 'g11',  title: 'Grade 11' },
    { code: 'g12',  title: 'Grade 12' },
    { code: 'ghs',  title: 'High School' }
  ],
  resourceTypes: [
    { code: 'ir', title: 'Instructional' },
    { code: 'cp', title: 'Connections Playlist' },
    { code: 'pl', title: 'Professional Learning' },
    { code: 'as', title: 'Accessibility Strategy' },
    { code: 'fs', title: 'Formative Assessment Strategy' }
  ],
  standards: [
    { code: 'ela-g3-l3a',     title: 'L-3a' },
    { code: 'ela-g3-l6',      title: 'L-6' },
    { code: 'ela-g3-sl2',     title: 'SL-2' },
    { code: 'ela-g3-sl3',     title: 'SL-3' },
    { code: 'ela-g4-l3a',     title: 'L-3a' },
    { code: 'ela-g4-l6',      title: 'L-6' },
    { code: 'ela-g4-ri7',     title: 'RI-7' },
    { code: 'ela-g4-sl2',     title: 'SL-2' },
    { code: 'ela-g4-sl3',     title: 'SL-3' },
    { code: 'ela-g4-w2d',     title: 'W-2d' },
    { code: 'ela-g4-w3d',     title: 'W-3d' },
    { code: 'ela-g5-sl2',     title: 'SL-2' },
    { code: 'ela-g5-sl3',     title: 'SL-3' },
    { code: 'ela-g5-w2d',     title: 'W-2d' },
    { code: 'ela-g5-w3d',     title: 'W-3d' },
    { code: 'ela-g6-l1',      title: 'L-1' },
    { code: 'ela-g6-l2',      title: 'L-2' },
    { code: 'ela-g6-l3a',     title: 'L-3a' },
    { code: 'ela-g6-l3b',     title: 'L-3b' },
    { code: 'ela-g6-l6',      title: 'L-6' },
    { code: 'ela-g6-sl2',     title: 'SL-2' },
    { code: 'ela-g6-sl3',     title: 'SL-3' },
    { code: 'ela-g6-w2d',     title: 'W-2d' },
    { code: 'ela-g6-w3d',     title: 'W-3d' },
    { code: 'ela-g7-l1',      title: 'L-1' },
    { code: 'ela-g7-l2',      title: 'L-2' },
    { code: 'ela-g7-l3a',     title: 'L-3a' },
    { code: 'ela-g7-l6',      title: 'L-6' },
    { code: 'ela-g7-sl2',     title: 'SL-2' },
    { code: 'ela-g7-sl3',     title: 'SL-3' },
    { code: 'ela-g7-w2d',     title: 'W-2d' },
    { code: 'ela-g7-w3d',     title: 'W-3d' },
    { code: 'ela-g8-sl2',     title: 'SL-2' },
    { code: 'ela-g8-sl3',     title: 'SL-3' },
    { code: 'ela-ghs-l1',     title: 'L-1' },
    { code: 'ela-ghs-l2',     title: 'L-2' },
    { code: 'ela-ghs-l6',     title: 'L-6' },
    { code: 'ela-ghs-sl2',    title: 'SL-2' },
    { code: 'ela-ghs-sl3',    title: 'SL-3' },
    { code: 'ela-ghs-w2d',    title: 'W-2d' },
    { code: 'ela-ghs-w3d',    title: 'W-3d' },
    { code: 'ela-ghs-w8',     title: 'W-8' },
    { code: 'math-g3-g1',     title: 'G-1' },
    { code: 'math-g3-g2',     title: 'G-2' },
    { code: 'math-g3-nf1',    title: 'NF-1' },
    { code: 'math-g3-nf2',    title: 'NF-2' },
    { code: 'math-g3-nf2a',   title: 'NF-2a' },
    { code: 'math-g3-nf3',    title: 'NF-3' },
    { code: 'math-g3-nf3a',   title: 'NF-3a' },
    { code: 'math-g3-nf3c',   title: 'NF-3c' },
    { code: 'math-g3-nf3d',   title: 'NF-3d' },
    { code: 'math-g3-oa8',    title: 'OA-8' },
    { code: 'math-g3-oa9',    title: 'OA-9' },
    { code: 'math-g4-g1',     title: 'G-1' },
    { code: 'math-g4-g2',     title: 'G-2' },
    { code: 'math-g4-g3',     title: 'G-3' },
    { code: 'math-g4-nbt1',   title: 'NBT-1' },
    { code: 'math-g4-nbt2',   title: 'NBT-2' },
    { code: 'math-g4-nbt3',   title: 'NBT-3' },
    { code: 'math-g5-g1',     title: 'G-1' },
    { code: 'math-g5-g2',     title: 'G-2' },
    { code: 'math-g5-g3',     title: 'G-3' },
    { code: 'math-g5-g4',     title: 'G-4' },
    { code: 'math-g6-rp1',    title: 'RP-1' },
    { code: 'math-g6-rp2',    title: 'RP-2' },
    { code: 'math-g6-rp3',    title: 'RP-3' },
    { code: 'math-g6-sp1',    title: 'SP-1' },
    { code: 'math-g6-sp2',    title: 'SP-2' },
    { code: 'math-g6-sp3',    title: 'SP-3' },
    { code: 'math-g6-sp4',    title: 'SP-4' },
    { code: 'math-g6-sp5',    title: 'SP-5' },
    { code: 'math-g7-g3',     title: 'G-3' },
    { code: 'math-g7-ns1',    title: 'NS-1' },
    { code: 'math-g7-ns1b',   title: 'NS-1b' },
    { code: 'math-g7-ns1c',   title: 'NS-1c' },
    { code: 'math-g7-ns1d',   title: 'NS-1d' },
    { code: 'math-g7-ns2',    title: 'NS-2' },
    { code: 'math-g7-ns3',    title: 'NS-3' },
    { code: 'math-g8-ee8b',   title: 'EE-8b' },
    { code: 'math-g8-f1',     title: 'F-1' },
    { code: 'math-g8-f2',     title: 'F-2' },
    { code: 'math-g8-f3',     title: 'F-3' },
    { code: 'math-g8-f4',     title: 'F-4' },
    { code: 'math-g8-f5',     title: 'F-5' },
    { code: 'math-ghs-if1',   title: 'IF-1' },
    { code: 'math-ghs-if3',   title: 'IF-3' },
    { code: 'math-ghs-if4',   title: 'IF-4' },
    { code: 'math-ghs-if5',   title: 'IF-5' },
    { code: 'math-ghs-if6',   title: 'IF-6' },
    { code: 'math-ghs-rei4b', title: 'REI-4b' },
    { code: 'math-ghs-srt6',  title: 'SRT-6' },
    { code: 'math-ghs-srt7',  title: 'SRT-7' },
    { code: 'math-ghs-srt8',  title: 'SRT-8' }
  ],
  subjects: [
    { code: 'ela',  title: 'English Language Arts' },
    { code: 'math', title: 'Mathematics' },
  ],
  targets: [
    { code: 'ela-c2-g3-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g4-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g5-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g6-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g6-t9',   title: 'Editing' },
    { code: 'ela-c2-g7-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g7-t9',   title: 'Editing' },
    { code: 'ela-c2-ghs-t8',  title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-ghs-t9',  title: 'Editing' },
    { code: 'ela-c3-g3-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g4-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g5-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g6-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g7-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g8-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-ghs-t4',  title: 'Listen and Interpret' },
    { code: 'ela-c4-g4-t2',   title: 'Interpret & Integrate Information' },
    { code: 'ela-c4-ghs-t3',  title: 'Evaluate Information / Sources' },
    { code: 'math-c1-g3-td',  title: 'Solve problems involving the four operations, and identify and explain patterns in arithmetic' },
    { code: 'math-c1-g3-tf',  title: 'Develop understanding of fractions as numbers' },
    { code: 'math-c1-g3-tk',  title: 'Reason with shapes and their attributes' },
    { code: 'math-c1-g4-td',  title: 'Generalize place value understanding for multi-digit whole numbers' },
    { code: 'math-c1-g4-tl',  title: 'Draw and identify lines and angles, and classify shapes by properties of their lines and angles' },
    { code: 'math-c1-g5-tj',  title: 'Graph points on the coordinate plane to solve real-world and mathmatical problems' },
    { code: 'math-c1-g5-tk',  title: 'Classify two-dimensional figures into categories based on their properties' },
    { code: 'math-c1-g6-ta',  title: 'Understand ratio concepts and use ratio reasoning to solve problems' },
    { code: 'math-c1-g6-ti',  title: 'Develop an understanding of statistics variability' },
    { code: 'math-c1-g6-tj',  title: 'Summarize and describe distributions' },
    { code: 'math-c1-g7-tb',  title: 'Apply and extend previous understandings of operations with fractions to add, subtract, multiply, and divide rational numbers' },
    { code: 'math-c1-g7-te',  title: 'Draw, construct, and describe geometrical figures and describe the relationships behind them' },
    { code: 'math-c1-g8-td',  title: 'Analyze and solve linear equations and pairs of simultaneous linear equations' },
    { code: 'math-c1-g8-te',  title: 'Define, evaluate, and compare functions' },
    { code: 'math-c1-g8-tf',  title: 'Use functions to model relationships between quantities' },
    { code: 'math-c1-ghs-ti', title: 'Solve equations and inequalities in one variable' },
    { code: 'math-c1-ghs-tk', title: 'Understand the concept of a function and use function notation' },
    { code: 'math-c1-ghs-tl', title: 'Interpret functions that arise in applications in terms of the context' },
    { code: 'math-c1-ghs-to', title: 'Define trigonometric ratios and solve problems involving right triangles' }
  ]
};

export const mockSearchFilters: SearchFilters = {
  query: '',
  resourceTypes: [
    { title: 'Instructional', code: 'ir' },
    { title: 'Professional Learning', code: 'pl' },
    { title: 'Connections Playlist', code: 'cp' },
    { title: 'Formative Assessment Strategy', code: 'fas' },
    { title: 'Accessibility Strategy', code: 'ac' }
  ],
  grades: [
    { title: 'Kindergarten', code: 'k' },
    { title: '1', code: '1' },
    { title: '2', code: '2' },
    { title: '3', code: '3' },
    { title: '4', code: '4' },
    { title: '5', code: '5' },
    { title: '6', code: '6' },
    { title: '7', code: '7' },
    { title: '8', code: '8' },
    { title: 'High School', code: 'hs' }
  ],
  subjects: [
    { title: 'Mathematics', code: 'math' },
    { title: 'English Language Arts', code: 'ela' }
  ],
  claims: [
    { title: 'Reading', code: 'ela-c1' },
    { title: 'Writing', code: 'ela-c2' },
    { title: 'Speaking & Listening', code: 'ela-c3' },
    { title: 'Research / Inquiry', code: 'ela-c4' },
  ],
  targets: [
    { title: 'Sample Target A', code: 'sample-target-a' },
    { title: 'Sample Target B', code: 'sample-target-b' }
  ],
  standards: [
    { title: 'Sample Standard A', code: 'sample-standard-a' },
    { title: 'Sample Standard B', code: 'sample-standard-b' }
  ],
};
