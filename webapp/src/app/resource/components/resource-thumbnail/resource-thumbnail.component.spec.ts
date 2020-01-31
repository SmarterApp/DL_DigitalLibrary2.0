import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceThumbnailComponent } from './resource-thumbnail.component';
import {SafeUrlPipe} from '../../../pipes/safe-url.pipe';
import {ReplaceNullImagePipe} from '../../../pipes/replace-null-image.pipe';

describe('ResourceThumbnailComponent', () => {
  let component: ResourceThumbnailComponent;
  let fixture: ComponentFixture<ResourceThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceThumbnailComponent, SafeUrlPipe, ReplaceNullImagePipe ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
