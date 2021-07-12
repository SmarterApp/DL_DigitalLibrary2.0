import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "sbdl-resource-card",
  templateUrl: "./resource-card.component.html",
  styleUrls: ["./resource-card.component.scss"],
})
export class ResourceCardComponent implements OnInit {
  @Input()
  text: string;
  @Input()
  resourceUrl: string;
  @Input()
  description: string;
  @Input()
  icon: string;

  constructor() {}

  ngOnInit() {
  }
}
