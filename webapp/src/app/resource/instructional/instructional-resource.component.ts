import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ResourceModel } from '../../data/resource/model/resource.model';
import { ResourceComponent } from '../resource-component.interface';
import { ScrollableElements } from '../outline/scrollable-elements.model';
import { Scroll } from '@angular/router';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './instructional-resource.component.html',
  styleUrls: ['./instructional-resource.component.scss']
})
export class InstructionalResourceComponent implements OnInit, ResourceComponent {

  model: ResourceModel;

  scrollableElements: ScrollableElements;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() { 

  }

  setScrollableElements($event) {
    this.scrollableElements = $event;

    // effectively notifies the outline component.
    this.cdRef.detectChanges();
  }
}
