import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonMenu, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel, 
  IonAvatar,
  IonButton,
  IonBadge
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  peopleOutline, 
  personOutline, 
  businessOutline, 
  clipboardOutline, 
  folderOutline, 
  bulbOutline, 
  calendarOutline, 
  settingsOutline, 
  logOutOutline,
  chevronDownOutline,
  notificationsOutline,
  mailOutline,
  documentTextOutline,
  analyticsOutline,
  shieldCheckmarkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonAvatar,
    IonButton,
    IonBadge
  ]
})
export class MenuComponent {
  constructor() {
    addIcons({
      'people-outline': peopleOutline,
      'person-outline': personOutline,
      'business-outline': businessOutline,
      'clipboard-outline': clipboardOutline,
      'folder-outline': folderOutline,
      'bulb-outline': bulbOutline,
      'calendar-outline': calendarOutline,
      'settings-outline': settingsOutline,
      'log-out-outline': logOutOutline,
      'chevron-down-outline': chevronDownOutline,
      'notifications-outline': notificationsOutline,
      'mail-outline': mailOutline,
      'document-text-outline': documentTextOutline,
      'analytics-outline': analyticsOutline,
      'shield-checkmark-outline': shieldCheckmarkOutline
    });
  }

  menuItems = [
    {
      title: 'Dashboard',
      icon: 'analytics-outline',
      url: '/dashboard',
      badge: null
    },
    {
      title: 'Events',
      icon: 'calendar-outline',
      url: '/events',
      badge: '3'
    },
    {
      title: 'My Staff',
      icon: 'person-outline',
      url: '/staff',
      badge: null
    },
    {
      title: 'Suppliers',
      icon: 'business-outline',
      url: '/suppliers',
      badge: null
    },
    {
      title: 'Onsite Inductee',
      icon: 'people-outline',
      url: '/tabs/onsite-inductee',
      badge: null,
      active: true
    },
    {
      title: 'Logget',
      icon: 'clipboard-outline',
      url: '/logget',
      badge: '12'
    },
    {
      title: 'Checklists',
      icon: 'document-text-outline',
      url: '/checklists',
      badge: null
    },
    {
      title: 'My Files',
      icon: 'folder-outline',
      url: '/files',
      badge: null
    },
    {
      title: 'Induction',
      icon: 'bulb-outline',
      url: '/induction',
      badge: '5'
    }
  ];

  recentItems = [
    {
      title: 'Loom Mobile App',
      subtitle: 'Mobile Development',
      color: 'primary',
      shortcut: '⌘1'
    },
    {
      title: 'Monday Redesign',
      subtitle: 'UI/UX Project',
      color: 'danger',
      shortcut: '⌘2'
    },
    {
      title: 'Udemy Courses',
      subtitle: 'Learning Platform',
      color: 'primary',
      shortcut: '⌘3'
    }
  ];

  onMenuItemClick(item: any) {
    console.log('Menu item clicked:', item.title);
    // Navigation will be handled by the router
  }

  onRecentItemClick(item: any) {
    console.log('Recent item clicked:', item.title);
  }

  onSettingsClick() {
    console.log('Settings clicked');
  }

  onLogoutClick() {
    console.log('Logout clicked');
  }
}
