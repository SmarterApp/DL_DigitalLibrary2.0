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
    id: 110,
    type: ResourceType.Instructional,
    hasNotes: true,
    summary: 'This lesson uses students\' prior experiences with graphical representations of systems to facilitate their understanding of solving systems algebraically. In this lesson, students will continue to engage with systems of equations where both equations are in the form y = mx + b. Students will graduate to other types of system structures. They will learn that examining structures is a good first step since it is sometimes possible to recognize an efficient method for solving the system through observation. Students realize that if at least one of the equations has a single variable isolated, then that expression can be substituted into the other equation to get a single equation in one variable. Finally, students use the structure of a system of equations to reason about its lack of solutions.',
    properties: {
      authorOrg: '',
      authors: [ 'Nell Jean' ],
      claims: [
        {
          code: 'math-c1',
          number: 1,
          title: 'Concepts and Procedures'
        }
      ],
      grades: [
        {
          code: 'g8',
          shortName: '8',
          longName: 'Grade 8'
        }
      ],
      image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/all-systems-go.png',
      isBookmarked: true,
      lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
      standards: [
        {
          code: 'ee8b',
          title: 'EE-8b',
          description: ' Solve systems of two linear equations in two variables algebraically, and estimate solutions by graphing the equations. Solve simple cases by inspection. For example, 3x + 2y = 5 and 3x + 2y = 6 have no solution because 3x + 2y cannot simultaneously be 5 and 6.'
        }
      ],
      subject: { code: 'math', shortName: 'Math', fullName: 'Mathematics' },
      targets: [
        {
          code: 'td',
          number: 'D',
          description: 'Analyze and solve linear equations and pairs of simultaneous linear equations.',
          group: ''
        }
      ],
      title: 'All Systems Go?'
    }
  },
  {
    id: 112,
    type: ResourceType.Instructional,
    hasNotes: false,
    summary: 'Students will work with a partner to slice geometric solids and find two-dimensional shapes. Once students have worked with a partner, the teacher will bring the class together to go over the problems. The teacher can show a visual model of how each problem was solved. At the end of the slide show is an Exit Ticket to be used to check for understanding and also formally assess the intended learning goal. This lesson is accessed through a Google Slide presentation (technology required).',
    properties: {
      authorOrg: '',
      authors: [ 'Michael Regan' ],
      claims: [ { code: 'math-c1', number: 1, title: 'Concepts and Procedures' } ],
      grades: [ { code: 'g7', shortName: '7', longName: 'Grade 7' } ],
      image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/Any+Way+You+Slice+It.png',
      isBookmarked: true,
      lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
      standards: [
        {
          code: 'g3',
          title: 'G-3',
          description: ' Draw, construct, and describe geometrical figures and describe the relationships between them.  Describe the two-dimensional figures that result from slicing three-dimensional figures, as in plane sections of right rectangular prisms and right rectangular pyramids. '
        }
      ],
      subject: { code: 'math', shortName: 'Math', fullName: 'Mathematics' },
      targets: [
        {
          code: 'te',
          number: 'E',
          description: 'Draw, construct, and describe geometrical figures and describe the relationships behind them.',
          group: ''
        }
      ],
      title: 'Any Way You Slice It!'
    }
  },
  {
    id: 114,
    type: ResourceType.Instructional,
    hasNotes: false,
    summary: 'This resource is designed for a block day lesson or two 45-minute lessons. This is an introductory lesson on using the quadratic formula to solve quadratic equations. The lesson contains an Entrance Ticket, exploration activity, guided notes, question-question-swap activity, group activity, and Exit Ticket.',
    properties: {
      authorOrg: 'Smarter Balanced',
      authors: [ 'Chelsey Shade' ],
      claims: [ { code: 'math-c1', number: 1, title: 'Concepts and Procedures' } ],
      grades: [ { code: 'ghs', shortName: 'HS', longName: 'High School' } ],
      image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/Intro+to+Quadratic+Formula.png',
      isBookmarked: true,
      lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
      standards: [
        {
          code: 'arei.4b',
          title: 'A-REI.4b',
          description: ' Solve quadratic equations by inspection (e.g., for x^2 = 49), taking square roots, completing the square, the quadratic formula and factoring, as appropriate to the initial form of the equation. Recognize when the quadratic formula gives complex solutions and write them as a ± bi for real numbers a and b.'
        }
      ],
      subject: { code: 'math', shortName: 'Math', fullName: 'Mathematics' },
      targets: [
        {
          code: 'ti',
          number: 'I',
          description: 'Solve equations and inequalities in one variable.',
          group: ''
        },
        {
          code: 'ti',
          number: 'J',
          description: 'Solve equations and inequalities in one variable.',
          group: ''
        },
        {
          code: 'ti',
          number: 'K',
          description: 'Solve equations and inequalities in one variable.',
          group: ''
        }
      ],
      title: 'Intro to Quadratic Formula'
    }
  },
  {
    id: 115,
    type: ResourceType.ProfessionalLearning,
    hasNotes: false,
    summary: 'This professional learning activity was created for the State Network of Educators 2018 Winter Workshop to calibrate a shared understanding of the formative assessment process. By using five different chat stations with multiple entry points into the formative assessment process, educators energetically reviewed data, watched and discussed videos, shared technology strategies, prepared an elevator speech, and reviewed expert text. The engagement and focus in this timed activity produced multiple shifts in thinking and provided educators with a renewed energy to embed student success criteria and opportunities for authentic feedback into instructional lesson planning.',
    properties: {
      authorOrg: 'Smarter Balanced',
      authors: [ 'Amy Thierry', 'Heidi Kroog' ],
      claims: [],
      grades: [],
      image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/files/deepening-understanding-of-fap/professional-learning-deepening-understanding-of-the-fap.png',
      isBookmarked: true,
      lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
      standards: [],
      subject: { code: null, shortName: null, fullName: null },
      targets: [],
      title: 'Deepening Understanding and Use of the Formative Assessment Process'
    }
  },
  {
    id: 40,
    type: ResourceType.FormativeStrategy,
    hasNotes: false,
    summary: 'A planned, well-thought-out, higher-order questioning strategy aligned to the content. Students&rsquo; responses to higher-order questions allow the teacher to ascertain the level and scope of students&rsquo; understanding.',
    properties: {
      authorOrg: 'Smarter Balanced',
      authors: [ ],
      claims: [],
      grades: [],
      image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/40/Strategic+Questioning+-+Serene+Cook.png',
      isBookmarked: true,
      lastUpdatedDate: new Date('2020-01-01T12:00:00+00:00'),
      standards: [],
      subject: { code: null, shortName: null, fullName: null },
      targets: [],
      title: 'Strategic Questioning'
    }
  },
  {
    id: 52,
    type: ResourceType.AccessibilityStrategy,
    hasNotes: false,
    summary: 'Students may decide to pause during classwork or during a test session based on their needs.',
    properties: {
      authorOrg: 'Smarter Balanced',
      authors: [],
      claims: [],
      grades: [],
      image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/52/breaks+-+Chelsey+Shade.png',
      isBookmarked: true,
      lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
      standards: [],
      subject: { code: null, shortName: null, fullName: null },
      targets: [],
      title: 'Breaks'
    }
  },
  {
    id: 200,
    type: ResourceType.ConnectionsPlaylist,
    hasNotes: false,
    summary: 'Students can explain and apply mathematical concepts and carry out mathematical procedures with precision and fluency when generalizing place value understanding for multi-digit whole numbers. Tasks for this target will ask students to compare multi-digit numbers using &gt;, =, and &lt;. Tasks should tap into students&rsquo; understanding of place value (e.g., by asking students to give a possible digit for the empty box in 4357 &lt; 43□9 that would make the inequality true). A smaller number of these tasks will incorporate student understanding of rounding (e.g., explaining why rounding to a certain place would change the symbol &lt; or &gt; to =).',
    properties: {
      authorOrg: '',
      authors: [],
      claims: [
        {
          code: 'math-c1',
          number: 1,
          title: 'Concepts and Procedures'
        }
      ],
      grades: [
        {
          code: 'g4',
          shortName: '4',
          longName: 'Grade 4'
        }
      ],
      image: null,
      isBookmarked: true,
      lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
      standards: [
        {
          code: 'math-g4-nbt1',
          title: 'NBT-1',
          description: 'Generalize place value understanding for multi-digit whole numbers. Recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right. For example, recognize that 700 ÷ 70 = 10 by applying concepts of place value and division. (Grade 4 expectations in this domain are limited to whole numbers less than or equal to 1,000,000.)'
        },
        {
          code: 'math-g4-nbt2',
          title: 'NBT-2',
          description: 'Generalize place value understanding for multi-digit whole numbers. Read and write multi-digit whole numbers using base-ten numerals, number names, and expanded form. Compare two multi-digit numbers based on meanings of the digits in each place, using >, =, and < symbols to record the results of comparisons. (Grade 4 expectations in this domain are limited to whole numbers less than or equal to 1,000,000.)'
        },
        {
          code: 'math-g4-nbt3',
          title: 'NBT-3',
          description: 'Generalize place value understanding for multi-digit whole numbers. Use place value understanding to round multi-digit whole numbers to any place. (Grade 4 expectations in this domain are limited to whole numbers less than or equal to 1,000,000.)'
        }
      ],
      subject: {
        code: 'math',
        shortName: 'Math',
        fullName: 'Mathematics'
      },
      targets: [
        {
          code: 'math-c1-g4-td',
          number: 'D',
          description: 'Generalize place value understanding for multi-digit whole numbers',
          group: ''
        }
      ],
      title: 'Number and Operations in Base Ten'
    }
  }
];

export const initialSearchFilters: SearchFilters = {
  freeText: '',
  claims: [
    { code: 'ela-c2',   title: 'Writing' },
    { code: 'ela-c3',   title: 'Speaking & Listening' },
    { code: 'math-c1',  title: 'Concepts and Procedures' },
    { code: 'ela-c4',   title: 'Research/Inquiry' }
  ],
  grades: [
    { code: 'ghs',  title: 'High School' },
    { code: 'g3',   title: 'Grade 3' },
    { code: 'g6',   title: 'Grade 6' },
    { code: 'g7',   title: 'Grade 7' },
    { code: 'g4',   title: 'Grade 4' },
    { code: 'g5',   title: 'Grade 5' },
    { code: 'g8',   title: 'Grade 8' },
    { code: 'g10',  title: 'Grade 10' },
    { code: 'g9',   title: 'Grade 9' },
    { code: 'g11',  title: 'Grade 11' },
    { code: 'g12',  title: 'Grade 12' }
  ],
  resourceTypes: [
    { code: 'ir', title: 'Instructional' },
    { code: 'as', title: 'Accessibility Strategy' },
    { code: 'cp', title: 'Connections Playlist' },
    { code: 'fs', title: 'Formative Assessment Strategy' },
    { code: 'pl', title: 'Professional Learning' }
  ],
  standards: [
    { code: 'ela-ghs-l1',     title: 'L-1' },
    { code: 'ela-ghs-l2',     title: 'L-2' },
    { code: 'ela-g3-l3a',     title: 'L-3a' },
    { code: 'ela-g6-sl2',     title: 'SL-2' },
    { code: 'ela-g6-sl3',     title: 'SL-3' },
    { code: 'ela-g7-sl2',     title: 'SL-2' },
    { code: 'ela-g6-l2',      title: 'L-2' },
    { code: 'ela-g3-sl2',     title: 'SL-2' },
    { code: 'ela-g3-sl3',     title: 'SL-3' },
    { code: 'math-g3-oa8',    title: 'OA-8' },
    { code: 'math-g3-oa9',    title: 'OA-9' },
    { code: 'ela-g4-sl2',     title: 'SL-2' },
    { code: 'ela-g4-sl3',     title: 'SL-3' },
    { code: 'ela-g5-sl2',     title: 'SL-2' },
    { code: 'ela-g5-sl3',     title: 'SL-3' },
    { code: 'ela-ghs-sl2',    title: 'SL-2' },
    { code: 'ela-ghs-sl3',    title: 'SL-3' },
    { code: 'math-g7-ns1',    title: 'NS-1' },
    { code: 'math-g7-ns2',    title: 'NS-2' },
    { code: 'math-g7-ns3',    title: 'NS-3' },
    { code: 'ela-g7-sl3',     title: 'SL-3' },
    { code: 'ela-g8-sl2',     title: 'SL-2' },
    { code: 'ela-g8-sl3',     title: 'SL-3' },
    { code: 'ela-ghs-w3d',    title: 'W-3d' },
    { code: 'math-g3-nf3d',   title: 'NF-3d' },
    { code: 'math-g7-ns1d',   title: 'NS-1d' },
    { code: 'math-g4-nbt1',   title: 'NBT-1' },
    { code: 'math-g4-nbt2',   title: 'NBT-2' },
    { code: 'math-g4-nbt3',   title: 'NBT-3' },
    { code: 'math-g3-nf1',    title: 'NF-1' },
    { code: 'math-g3-nf2',    title: 'NF-2' },
    { code: 'math-g3-nf3',    title: 'NF-3' },
    { code: 'ela-ghs-l6',     title: 'L-6' },
    { code: 'ela-g6-l1',      title: 'L-1' },
    { code: 'ela-g5-w2d',     title: 'W-2d' },
    { code: 'ela-g5-w3d',     title: 'W-3d' },
    { code: 'ela-g7-l1',      title: 'L-1' },
    { code: 'ela-g6-l6',      title: 'L-6' },
    { code: 'ela-g6-w3d',     title: 'W-3d' },
    { code: 'ela-g3-l6',      title: 'L-6' },
    { code: 'ela-g7-l3a',     title: 'L-3a' },
    { code: 'ela-g7-l6',      title: 'L-6' },
    { code: 'ela-g7-w2d',     title: 'W-2d' },
    { code: 'ela-g7-w3d',     title: 'W-3d' },
    { code: 'ela-g4-l6',      title: 'L-6' },
    { code: 'math-ghs-srt6',  title: 'SRT-6' },
    { code: 'math-ghs-srt7',  title: 'SRT-7' },
    { code: 'math-ghs-srt8',  title: 'SRT-8' },
    { code: 'math-g3-g1',     title: 'G-1' },
    { code: 'math-g3-g2',     title: 'G-2' },
    { code: 'math-g8-ee8b',   title: 'EE-8b' },
    { code: 'ela-g4-ri7',     title: 'RI-7' },
    { code: 'ela-g6-l3a',     title: 'L-3a' },
    { code: 'ela-g6-w2d',     title: 'W-2d' },
    { code: 'math-g6-sp1',    title: 'SP-1' },
    { code: 'math-g6-sp2',    title: 'SP-2' },
    { code: 'math-g6-sp3',    title: 'SP-3' },
    { code: 'math-g6-sp4',    title: 'SP-4' },
    { code: 'math-g6-sp5',    title: 'SP-5' },
    { code: 'math-g3-nf2a',   title: 'NF-2a' },
    { code: 'math-g3-nf3a',   title: 'NF-3a' },
    { code: 'math-g3-nf3c',   title: 'NF-3c' },
    { code: 'ela-g7-l2',      title: 'L-2' },
    { code: 'math-g4-g1',     title: 'G-1' },
    { code: 'math-g4-g2',     title: 'G-2' },
    { code: 'math-g4-g3',     title: 'G-3' },
    { code: 'math-ghs-if1',   title: 'IF-1' },
    { code: 'math-ghs-if3',   title: 'IF-3' },
    { code: 'math-ghs-if4',   title: 'IF-4' },
    { code: 'math-ghs-if5',   title: 'IF-5' },
    { code: 'math-ghs-if6',   title: 'IF-6' },
    { code: 'math-g7-ns1b',   title: 'NS-1b' },
    { code: 'math-g7-ns1c',   title: 'NS-1c' },
    { code: 'math-g8-f1',     title: 'F-1' },
    { code: 'math-g8-f2',     title: 'F-2' },
    { code: 'math-g8-f3',     title: 'F-3' },
    { code: 'math-g8-f4',     title: 'F-4' },
    { code: 'math-g8-f5',     title: 'F-5' },
    { code: 'ela-ghs-w2d',    title: 'W-2d' },
    { code: 'math-g7-g3',     title: 'G-3' },
    { code: 'math-g5-g1',     title: 'G-1' },
    { code: 'math-g5-g2',     title: 'G-2' },
    { code: 'math-g5-g3',     title: 'G-3' },
    { code: 'math-g5-g4',     title: 'G-4' },
    { code: 'ela-ghs-w8',     title: 'W-8' },
    { code: 'math-ghs-rei4b', title: 'REI-4b' },
    { code: 'ela-g4-l3a',     title: 'L-3a' },
    { code: 'ela-g4-w2d',     title: 'W-2d' },
    { code: 'ela-g4-w3d',     title: 'W-3d' },
    { code: 'ela-g6-l3b',     title: 'L-3b' },
    { code: 'math-g6-rp1',    title: 'RP-1' },
    { code: 'math-g6-rp2',    title: 'RP-2' },
    { code: 'math-g6-rp3',    title: 'RP-3' }
  ],
  subjects: [
    { code: 'ela',  title: 'English Language Arts' },
    { code: 'ut',   title: 'Univeral Tool' },
    { code: 'math', title: 'Mathematics' },
    { code: 'ds',   title: 'Designated Supports' },
    { code: 'ac',   title: 'Accommodations' }
  ],
  targets: [
    { code: 'ela-c2-ghs-t9',  title: 'Editing' },
    { code: 'ela-c2-g3-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c3-g6-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g7-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c2-g6-t9',   title: 'Editing' },
    { code: 'ela-c3-g3-t4',   title: 'Listen and Interpret' },
    { code: 'math-c1-g3-td',  title: 'Solve problems involving the four operations, and identify and explain patterns in arithmetic' },
    { code: 'ela-c3-g4-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g5-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-ghs-t4',  title: 'Listen and Interpret' },
    { code: 'math-c1-g7-tb',  title: 'Apply and extend previous understandings of operations with fractions to add, subtract, multiply, and divide rational numbers' },
    { code: 'ela-c3-g8-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c2-ghs-t8',  title: 'Language & Vocabulary Use' },
    { code: 'math-c1-g3-tf',  title: 'Develop understanding of fractions as numbers' },
    { code: 'math-c1-g4-td',  title: 'Generalize place value understanding for multi-digit whole numbers' },
    { code: 'ela-c2-g5-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g7-t9',   title: 'Editing' },
    { code: 'ela-c2-g6-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g7-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g4-t8',   title: 'Language & Vocabulary Use' },
    { code: 'math-c1-ghs-to', title: 'Define trigonometric ratios and solve problems involving right triangles' },
    { code: 'math-c1-g3-tk',  title: 'Reason with shapes and their attributes' },
    { code: 'math-c1-g8-td',  title: 'Analyze and solve linear equations and pairs of simultaneous linear equations' },
    { code: 'ela-c4-g4-t2',   title: 'Interpret & Integrate Information' },
    { code: 'math-c1-g6-ti',  title: 'Develop an understanding of statistics variability' },
    { code: 'math-c1-g6-tj',  title: 'Summarize and describe distributions' },
    { code: 'math-c1-g4-tl',  title: 'Draw and identify lines and angles, and classify shapes by properties of their lines and angles' },
    { code: 'math-c1-ghs-tk', title: 'Understand the concept of a function and use function notation' },
    { code: 'math-c1-ghs-tl', title: 'Interpret functions that arise in applications in terms of the context' },
    { code: 'math-c1-g8-te',  title: 'Define, evaluate, and compare functions' },
    { code: 'math-c1-g8-tf',  title: 'Use functions to model relationships between quantities' },
    { code: 'math-c1-g7-te',  title: 'Draw, construct, and describe geometrical figures and describe the relationships behind them' },
    { code: 'math-c1-g5-tj',  title: 'Graph points on the coordinate plane to solve real-world and mathmatical problems' },
    { code: 'math-c1-g5-tk',  title: 'Classify two-dimensional figures into categories based on their properties' },
    { code: 'ela-c4-ghs-t3',  title: 'Evaluate Information / Sources' },
    { code: 'math-c1-ghs-ti', title: 'Solve equations and inequalities in one variable' },
    { code: 'math-c1-g6-ta',  title: 'Understand ratio concepts and use ratio reasoning to solve problems' }
  ]
};

export const mockSearchFilters: SearchFilters = {
  freeText: '',
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
