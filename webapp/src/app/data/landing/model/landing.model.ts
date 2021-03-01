import {HowHelp} from './howhelp.model';
import {HowUse} from './howuse.model';

export interface Landing {
    id: number;
    title: string;
    type: string;
    titleShort: string;
    introTitle: string;
    introText: string;
    promotedVideoLink: string;
    promotedVideoMessage: string;
    howHelp: HowHelp[];
    howUse: HowUse[];
  }