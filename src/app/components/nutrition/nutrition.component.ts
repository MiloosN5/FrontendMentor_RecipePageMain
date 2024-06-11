import { Component } from '@angular/core';
import { ListItem } from '../../types/listItem.type';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.scss'
})
export class NutritionComponent {
  nutritionList: ListItem[] = [
    {title: 'Calories', content: '277kcal'}, 
    {title: 'Carbs', content: '0g'}, 
    {title: 'Protein', content: '20g'}, 
    {title: 'Fat', content: '22g'}, 
  ]
}
