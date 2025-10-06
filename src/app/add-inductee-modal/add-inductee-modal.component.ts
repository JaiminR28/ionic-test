import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonRadio,
  IonRadioGroup,
  IonChip,
  IonButtons,
  IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  addOutline,
  closeOutline,
  personOutline,
  mailOutline,
  callOutline,
  businessOutline,
  refreshOutline,
  addCircleOutline,
  trashOutline,
  chevronDownOutline
} from 'ionicons/icons';

export interface InductionItem {
  id: string;
  name: string;
}

@Component({
  selector: 'app-add-inductee-modal',
  templateUrl: './add-inductee-modal.component.html',
  styleUrls: ['./add-inductee-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonRadio,
    IonRadioGroup,
    IonChip,
    IonButtons,
    IonFooter
  ]
})
export class AddInducteeModalComponent {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() inducteeAdded = new EventEmitter<any>();

  inducteeForm: FormGroup;
  selectedInductionType: 'general' | 'event' = 'general';
  assignedInductions: InductionItem[] = [];

  countryCodes = [
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'AU' },
    { code: '+91', country: 'IN' },
    { code: '+86', country: 'CN' }
  ];

  staffRoles = [
    'Electrician',
    'Graphic Designer',
    'Marketing Specialist',
    'Web Developer',
    'Carpenter',
    'Project Manager',
    'Safety Officer',
    'Supervisor'
  ];

  generalInductions = [
    'Cloud Computing Essentials',
    'Workplace Safety',
    'Company Policies',
    'Emergency Procedures',
    'Data Security'
  ];

  eventInductions = [
    'Event Setup',
    'Crowd Management',
    'Emergency Response',
    'Equipment Handling'
  ];

  constructor(private formBuilder: FormBuilder) {
    addIcons({
      'add-outline': addOutline,
      'close-outline': closeOutline,
      'person-outline': personOutline,
      'mail-outline': mailOutline,
      'call-outline': callOutline,
      'business-outline': businessOutline,
      'refresh-outline': refreshOutline,
      'add-circle-outline': addCircleOutline,
      'trash-outline': trashOutline,
      'chevron-down-outline': chevronDownOutline
    });

    this.inducteeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      mobile: ['', [Validators.required]],
      countryCode: ['+61', [Validators.required]],
      email: ['', [Validators.email]],
      staffRole: ['', [Validators.required]],
      companyType: ['other', [Validators.required]],
      companyName: ['', [Validators.required]]
    });
  }

  onClose() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.resetForm();
  }

  onAddInductee() {
    if (this.inducteeForm.valid) {
      const formData = {
        ...this.inducteeForm.value,
        assignedInductions: this.assignedInductions,
        inductionType: this.selectedInductionType
      };
      
      this.inducteeAdded.emit(formData);
      this.onClose();
    } else {
      console.log('Form is invalid');
      // Mark all fields as touched to show validation errors
      Object.keys(this.inducteeForm.controls).forEach(key => {
        this.inducteeForm.get(key)?.markAsTouched();
      });
    }
  }

  onInductionTypeChange(type: 'general' | 'event') {
    this.selectedInductionType = type;
    this.assignedInductions = []; // Clear assigned inductions when switching types
  }

  onAddInduction() {
    const availableInductions = this.selectedInductionType === 'general' 
      ? this.generalInductions 
      : this.eventInductions;
    
    // For demo purposes, add the first available induction
    if (availableInductions.length > 0) {
      const newInduction: InductionItem = {
        id: Date.now().toString(),
        name: availableInductions[0]
      };
      this.assignedInductions.push(newInduction);
    }
  }

  onRemoveInduction(index: number) {
    this.assignedInductions.splice(index, 1);
  }

  onReloadInductions() {
    // Reload inductions logic
    console.log('Reloading inductions...');
  }

  getCurrentInductions() {
    return this.selectedInductionType === 'general' 
      ? this.generalInductions 
      : this.eventInductions;
  }

  getInductionCount() {
    return this.getCurrentInductions().length;
  }

  resetForm() {
    this.inducteeForm.reset({
      countryCode: '+61',
      companyType: 'other'
    });
    this.assignedInductions = [];
    this.selectedInductionType = 'general';
  }

  getFieldError(fieldName: string): string {
    const field = this.inducteeForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName} is required`;
      }
      if (field.errors['minlength']) {
        return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors['maxlength']) {
        return `${fieldName} must not exceed ${field.errors['maxlength'].requiredLength} characters`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  }
}
