import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TenantThemeService } from 'src/app/data/tenant-theme/tenant-theme.service';
import { MockTenantThemeService } from 'src/app/app.module.spec';
import { PreloginSelectionsService } from 'src/app/data/prelogin-selections/prelogin-selections.service';
import { of } from 'rxjs';

const mockPreloginSelectionsService = jasmine.createSpyObj('MockPreloginSelectionsService', ['getAll']);
mockPreloginSelectionsService.getAll.and.callFake(function() {
  return of([]);
});

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TenantThemeService, useClass: MockTenantThemeService },
        { provide: PreloginSelectionsService, useValue: mockPreloginSelectionsService }
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    // mockPreloginSelectionsService.getAll.and.returnValue(of(new Observable<PreloginSelection[]>()));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
