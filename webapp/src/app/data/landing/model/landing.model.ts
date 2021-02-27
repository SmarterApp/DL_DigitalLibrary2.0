import {HowHelp} from './howhelp.model';

export interface Landing {
    id: number;
    title: string;
    type: string;
    titleShort: string;
    introTitle: string;
    introText: string;
    howHelp: HowHelp[];
  }