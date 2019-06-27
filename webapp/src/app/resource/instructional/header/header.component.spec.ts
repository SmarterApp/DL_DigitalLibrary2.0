import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockResourceModel } from 'src/app/data/mock-data';
import { HeaderComponent } from './header.component';
import { mockDataServiceProviders } from 'src/app/app.module.spec';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.model = mockResourceModel.header;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Resource Title');
  });
});
