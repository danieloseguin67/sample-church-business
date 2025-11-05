import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-volunteering',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './volunteering.component.html',
  styleUrl: './volunteering.component.scss'
})
export class VolunteeringComponent {

}
