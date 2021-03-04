import {HowHelp} from './howhelp.model';
import {HowUse} from './howuse.model';
import {DiveDeeper} from './diveDeeper.model';
import {SamplePlaylist} from './samplePlaylist.model';

export interface Landing {
    id: number;
    title: string;
    type: string;
    howDoIUse: string;
    introTitle: string;
    introText: string;
    promotedVideoLink: string;
    promotedVideoMessage: string;
    howHelp: HowHelp[];
    howUse: HowUse[];
    diveDeeperHeader: string;
    diveDeeper: DiveDeeper[];
    samplePlaylist: SamplePlaylist[];
  }