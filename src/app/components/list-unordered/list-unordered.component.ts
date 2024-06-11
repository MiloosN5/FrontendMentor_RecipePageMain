import { Component, Input } from '@angular/core';
import { ListItem } from '../../types/listItem.type';

@Component({
  selector: 'app-list-unordered',
  templateUrl: './list-unordered.component.html',
  styleUrl: './list-unordered.component.scss'
})
export class ListUnorderedComponent {
  @Input() listType: string = '';
  @Input() listStyle: string = '';
  @Input() ingredientsItems: string[] = [];
  @Input() preparationItems: ListItem[] = [];
}
