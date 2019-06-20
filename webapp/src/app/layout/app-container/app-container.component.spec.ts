import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AppContainerComponent } from './app-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ActivatedRoute } from '@angular/router';

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, AppRoutingModule ],
      providers: [ 
        { provide: ActivatedRoute, useValue: { snapshot: { data: { currentUser: { firstName: 'Test', lastName: 'TestLast', tenantName: 'Tenant' } } } } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
