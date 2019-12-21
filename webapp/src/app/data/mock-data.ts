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
