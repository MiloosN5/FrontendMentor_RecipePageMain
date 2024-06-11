import { Component } from '@angular/core';
import { ListItem } from '../../types/listItem.type';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.scss'
})
export class PreparationComponent {
  preparationList: ListItem[] = [
    {title: 'Total', content: 'Approximately 10 minutes'}, 
    {title: 'Preparation', content: '5 minutes'}, 
    {title: 'Cooking', content: '5 minutes'}
  ]
}
