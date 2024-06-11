import { Component, Input } from '@angular/core';
import { ListItem } from '../../types/listItem.type';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.scss'
})
export class ListTableComponent {
  @Input() listType: string = '';
  @Input() nutritionItems: ListItem[] = [];
}
