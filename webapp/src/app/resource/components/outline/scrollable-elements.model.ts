import { ElementRef } from '@angular/core';

export class ScrollableElements {
    getStarted: any;
    overview: any;
    steps: any[];
    customStrategySection: ScrollableSection;
    attachments: any;
    comments: any;
    differentiation: any;
    formativeAssessmentProcess: any;
    topics: ScrollableSection[];
    sections: ScrollableSection[];
}

export class ScrollableSection {
    title: string;
    fontAwesomeIcon: string;
    sbdlIcon: string;
    elementRef: any;
}