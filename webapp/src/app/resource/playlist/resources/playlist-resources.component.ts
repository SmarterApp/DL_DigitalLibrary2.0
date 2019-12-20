import { Component, Input, OnInit } from '@angular/core';
import flatMap from 'lodash/flatmap';
import { PlaylistTopic } from '../../../data/resource/model/playlist-topic.model';

@Component({
  selector: 'sbdl-playlist-resources',
  templateUrl: './playlist-resources.component.html',
  styleUrls: ['./playlist-resources.component.scss']
})
export class PlaylistResourcesComponent implements OnInit {

  @Input()
  topics: PlaylistTopic[];

  resources: object[];

  ngOnInit() {
    this.resources = flatMap(this.topics, t => t.topicResources);
  }

}
