import { Component, Input } from '@angular/core';
import { ListItem } from '../../types/listItem.type';

@Component({
  selector: 'app-list-ordered',
  templateUrl: './list-ordered.component.html',
  styleUrl: './list-ordered.component.scss'
})
export class ListOrderedComponent {
  @Input() listType: string = '';
  @Input() listStyle: string = '';
  @Input() instructionsItems: ListItem[] = [];
}
