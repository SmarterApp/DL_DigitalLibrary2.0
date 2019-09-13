import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsComponent } from './topics.component';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.topicSection;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
