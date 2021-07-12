import { Component, Input, OnInit } from "@angular/core";
import flatMap from "lodash.flatmap";
import uniqBy from "lodash.uniqby";
import { PlaylistTopic } from "src/app/data/resource/model/playlist-topic.model";
@Component({
  selector: "sbdl-playlist-resources",
  templateUrl: "./playlist-resources.component.html",
  styleUrls: ["./playlist-resources.component.scss"],
})
export class PlaylistResourcesComponent implements OnInit {
  @Input()
  topics: PlaylistTopic[];

  resources: object[];

  ngOnInit() {
    const resources = flatMap(this.topics, (t) => t.topicResources);
    this.resources = uniqBy(resources, (r) => r.id);
  }
}
