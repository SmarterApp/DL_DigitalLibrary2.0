import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "sbdl-link-card",
  templateUrl: "./link-card.component.html",
  styleUrls: ["./link-card.component.scss"],
})
export class LinkCardComponent implements OnInit {
  @Input()
  text: string;
  @Input()
  resourceUrl: string = "https://smartertoolsforteachers.org/resource/1458";
  @Input()
  description: string;
  @Input()
  icon: string;

  constructor() {}

  ngOnInit() {
    console.log(this.resourceUrl)
  }
}
