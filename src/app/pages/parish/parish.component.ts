import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-parish',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './parish.component.html',
  styleUrl: './parish.component.scss'
})
export class ParishComponent {

}
