import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-masses',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './masses.component.html',
  styleUrl: './masses.component.scss'
})
export class MassesComponent {

}
