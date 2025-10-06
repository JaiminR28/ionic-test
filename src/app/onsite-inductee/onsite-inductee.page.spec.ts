import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnsiteInducteePage } from './onsite-inductee.page';

describe('OnsiteInducteePage', () => {
  let component: OnsiteInducteePage;
  let fixture: ComponentFixture<OnsiteInducteePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OnsiteInducteePage],
    });
    fixture = TestBed.createComponent(OnsiteInducteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
