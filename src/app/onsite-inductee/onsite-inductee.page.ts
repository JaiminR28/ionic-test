import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon, 
  IonSearchbar, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCheckbox, 
  IonBadge, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';
import { AddInducteeModalComponent } from '../add-inductee-modal/add-inductee-modal.component';

export interface Inductee {
  id: string;
  name: string;
  email: string;
  role: string;
  company: string;
  mobile: string;
  notified: string;
  inductions: {
    status: 'All Completed' | 'All Pending' | 'Partially Completed' | 'None Assigned';
    count?: number;
  };
  documents: {
    count: number;
    color: 'success' | 'warning' | 'danger' | 'primary';
  };
}

@Component({
  selector: 'app-onsite-inductee',
  templateUrl: './onsite-inductee.page.html',
  styleUrls: ['./onsite-inductee.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonIcon, 
    IonSearchbar, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonCheckbox, 
    IonBadge, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent,
    IonButtons,
    IonMenuButton,
    AddInducteeModalComponent
  ]
})
export class OnsiteInducteePage implements OnInit {

  searchTerm: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 10;
  isAddModalOpen: boolean = false;
  
  inductees: Inductee[] = [
    {
      id: '5678',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'Electrician',
      company: 'Apex',
      mobile: '+61 411 234 567',
      notified: '31 Dec 2024 4:00 PM',
      inductions: { status: 'All Completed' },
      documents: { count: 3, color: 'success' }
    },
    {
      id: '1123',
      name: 'Michael Brown',
      email: 'michael.brown@mail.com',
      role: 'Graphic Designer',
      company: 'Amex',
      mobile: '+61 499 765 432',
      notified: '04 Jan 2025 8:00 PM',
      inductions: { status: 'All Pending' },
      documents: { count: 3, color: 'warning' }
    },
    {
      id: '1617',
      name: 'David Wilson',
      email: 'david.wilson@domain.com',
      role: 'Marketing Specialist',
      company: 'Pinterest',
      mobile: '+61 423 456 789',
      notified: '02 Jan 2025 6:00 PM',
      inductions: { status: 'Partially Completed' },
      documents: { count: 0, color: 'danger' }
    },
    {
      id: '1415',
      name: 'Sarah Davis',
      email: 'sarah_d@outlook.com',
      role: 'Web Developer',
      company: 'Vertex',
      mobile: '+61 478 123 456',
      notified: '03 Jan 2025 7:00 PM',
      inductions: { status: 'None Assigned' },
      documents: { count: 3, color: 'primary' }
    },
    {
      id: '9101',
      name: 'Emily Johnson',
      email: 'emilyj@gmail.com',
      role: 'Carpenter',
      company: 'Summit',
      mobile: '+61 450 876 543',
      notified: '01 Jan 2025 5:00 PM',
      inductions: { status: 'All Completed' },
      documents: { count: 0, color: 'success' }
    },
    {
      id: '9101',
      name: 'Emily Johnson',
      email: 'emilyj@gmail.com',
      role: 'Carpenter',
      company: 'Summit',
      mobile: '+61 450 876 543',
      notified: '01 Jan 2025 5:00 PM',
      inductions: { status: 'All Completed' },
      documents: { count: 0, color: 'success' }
    }
  ];

  filteredInductees: Inductee[] = [];

  constructor() { }

  ngOnInit() {
    this.filteredInductees = [...this.inductees];
    this.totalPages = Math.ceil(this.inductees.length / this.itemsPerPage);
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    this.filterInductees();
  }

  filterInductees() {
    if (!this.searchTerm.trim()) {
      this.filteredInductees = [...this.inductees];
    } else {
      this.filteredInductees = this.inductees.filter(inductee =>
        inductee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        inductee.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        inductee.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        inductee.role.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.totalPages = Math.ceil(this.filteredInductees.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  onFilter() {
    console.log('Filter clicked');
  }

  onExport() {
    console.log('Export clicked');
  }

  onEmail() {
    console.log('Email clicked');
  }

  onSendRequest() {
    console.log('Send Request clicked');
  }

  onQRCode() {
    console.log('QR Code clicked');
  }

  onAddNew() {
    this.isAddModalOpen = true;
  }

  onModalClose() {
    this.isAddModalOpen = false;
  }

  onInducteeAdded(inducteeData: any) {
    console.log('New inductee added:', inducteeData);
    
    // Generate a new ID
    const newId = (Math.max(...this.inductees.map(i => parseInt(i.id))) + 1).toString();
    
    // Create new inductee object
    const newInductee: Inductee = {
      id: newId,
      name: `${inducteeData.firstName} ${inducteeData.lastName}`,
      email: inducteeData.email,
      role: inducteeData.staffRole,
      company: inducteeData.companyName,
      mobile: `${inducteeData.countryCode} ${inducteeData.mobile}`,
      notified: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      inductions: {
        status: inducteeData.assignedInductions.length > 0 ? 'All Pending' : 'None Assigned'
      },
      documents: {
        count: 0,
        color: 'primary'
      }
    };
    
    // Add to the beginning of the list
    this.inductees.unshift(newInductee);
    this.filteredInductees = [...this.inductees];
    this.totalPages = Math.ceil(this.filteredInductees.length / this.itemsPerPage);
    
    // Show success message (you can implement a toast notification here)
    console.log('Inductee added successfully!');
  }

  onEdit(inductee: Inductee) {
    console.log('Edit:', inductee);
  }

  onView(inductee: Inductee) {
    console.log('View:', inductee);
  }

  onEmailInductee(inductee: Inductee) {
    console.log('Email inductee:', inductee);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'All Completed':
        return 'success';
      case 'All Pending':
        return 'danger';
      case 'Partially Completed':
        return 'warning';
      case 'None Assigned':
        return 'medium';
      default:
        return 'medium';
    }
  }

  getDocumentColor(color: string): string {
    return color;
  }

  getPaginatedInductees(): Inductee[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredInductees.slice(startIndex, endIndex);
  }

  getPaginationPages(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    
    if (this.totalPages <= maxVisiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (this.currentPage > 3) {
        pages.push(-1);
      }
      
      const start = Math.max(2, this.currentPage - 1);
      const end = Math.min(this.totalPages - 1, this.currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (this.currentPage < this.totalPages - 2) {
        pages.push(-1);
      }
      
      if (!pages.includes(this.totalPages)) {
        pages.push(this.totalPages);
      }
    }
    
    return pages;
  }
}