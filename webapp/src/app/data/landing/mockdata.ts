import { LandingPage } from './model/landingPage.model';

export const LANDINGPAGE_OBJECT: LandingPage = 
{
	'type': 'pl',
	'taglineSection':{
		'header': 'Strengthen your teaching practice by growing your expertise',
		'description': 'Deepen your knowledge of formative instruction, how to use student results and data, and how the Smarter Balanced system works together to supercharge teaching. Designed to be flexible, professional learning resources can be used on your own or with a professional learning community. Grow your expertise and achieve your goals!' 
	},
	'howItHelpsSection':{
		'description': '<ul><li><strong>Understand the Smarter Balanced Ecosystem:</strong><span style="font-weight: 400;">Learn about the range of Smarter Balanced tools available to you, including Tools for Teachers, Smarter Reporting, Sample Items Website, the Smarter Content Explorer, and the Smarter Annotated Response Tool—designed to support your instructional needs.</span></li><li><strong>Support Instruction: </strong><span style="font-weight: 400;">Learn about four attributes of the formative assessment process and how to apply them throughout instruction to accelerate student learning.</span></li><li><strong>Understand Performance Tasks and Scoring:</strong><span style="font-weight: 400;"> Learn how to use the Smarter Annotated Response Tool (SmART) and Performance Tasks to support students during instruction.</span></li><li><strong>Understand the Reporting System:  </strong><span style="font-weight: 400;">Learn about the Smarter Reporting System and how you can use the embedded resources to act on student data.</span></li></ul>'
	},
	'callToActionSection':{
		'version': 'textSearch',
		'header': 'Start Using Professional Learning Resources',
		'description': 'Type in search terms to find a Professional Learning topic.',
		'promptText': 'Formative Assessment, Smarter Balanced System, etc.',
		'browseLinkText': 'Or browse all Professional Learning Resources.'
	},
	'howToUseSection':{
		'header': 'How can I use Professional Learning Resources?',
		'subSections': [
			{
				'sequenceNo': 1,
				'title': 'Individually',
				'description': 'Explore the available professional learning resources and use them to enhance your understanding of Smarter Balanced and the many resources to support student learning.'
			},
			{
				'sequenceNo': 2,
				'title': 'Professional Learning Communities',
				'description': 'Implement the professional learning resources with your professional learning communities (PLC) using the step-by-step directions and the included materials. Each PLC can explore the available resources and choose which one will best enhance instruction.'
			},
			{
				'sequenceNo': 3,
				'title': 'Coaches & Administrators',
				'description': 'Implement the professional learning resources with your teachers and staff using the “Step-by-Step” directions and included materials. Use the “Things to Consider” section for ideas to differentiate learning.'
			}
		]
	},
	'diveDeeperSection':{
		'description': 'Check out these additional resources to learn more about using a balanced assessment system.',
		'links': [
			{
				'order': 1,
				'label': 'Smarter Balanced Ecosystem',
				'url': 'https://smartertoolsforteachers.org/resource/406'				
			},
			{
				'order': 2,
				'label': 'Understanding Smarter Balanced Interim Assessments',
				'url': 'https://smartertoolsforteachers.org/resource/240'				
			}
		]
	},
	'sampleSection':{
		'header': '',
		'sampleResources': [
			{
				'id': 1400,
				'title': 'Understanding Tools for Teachers',
				'detail': ''
			},
			{
				'id': 242,
				'title': 'Understanding the Formative Assessment Process',
				'detail': ''
			}
		]		
	},
	'marketingGraphicUri': '',
	'marketingVideoLink': ''	
};