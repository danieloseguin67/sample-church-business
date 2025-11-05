import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.scss'
})
export class CommitteesComponent {

}
