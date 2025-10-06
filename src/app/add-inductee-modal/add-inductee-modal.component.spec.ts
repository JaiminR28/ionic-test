import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddInducteeModalComponent } from './add-inductee-modal.component';

describe('AddInducteeModalComponent', () => {
  let component: AddInducteeModalComponent;
  let fixture: ComponentFixture<AddInducteeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddInducteeModalComponent],
    });
    fixture = TestBed.createComponent(AddInducteeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
