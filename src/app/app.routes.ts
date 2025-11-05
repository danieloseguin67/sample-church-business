import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParishComponent } from './pages/parish/parish.component';
import { MassesComponent } from './pages/masses/masses.component';
import { EventsComponent } from './pages/events/events.component';
import { NewsComponent } from './pages/news/news.component';
import { CommitteesComponent } from './pages/committees/committees.component';
import { VolunteeringComponent } from './pages/volunteering/volunteering.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { DonationComponent } from './pages/donation/donation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parish', component: ParishComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'masses', component: MassesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'committees', component: CommitteesComponent },
  { path: 'volunteering', component: VolunteeringComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '' }
];
