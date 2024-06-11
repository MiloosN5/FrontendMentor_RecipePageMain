import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { PreparationComponent } from '../../components/preparation/preparation.component';
import { IngredientsComponent } from '../../components/ingredients/ingredients.component';
import { InstructionsComponent } from '../../components/instructions/instructions.component';
import { NutritionComponent } from '../../components/nutrition/nutrition.component';
import { DividerSectionComponent } from '../../components/divider-section/divider-section.component';
import { DividerListComponent } from '../../components/divider-list/divider-list.component';
import { ListOrderedComponent } from '../../components/list-ordered/list-ordered.component';
import { ListUnorderedComponent } from '../../components/list-unordered/list-unordered.component';
import { ListTableComponent } from '../../components/list-table/list-table.component';

@NgModule({
  declarations: [
    HeroComponent,
    PreparationComponent,
    IngredientsComponent,
    InstructionsComponent,
    NutritionComponent,
    DividerSectionComponent,
    DividerListComponent,
    ListOrderedComponent,
    ListUnorderedComponent,
    ListTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    PreparationComponent,
    IngredientsComponent,
    InstructionsComponent,
    NutritionComponent,
    DividerSectionComponent,
    DividerListComponent,
    ListOrderedComponent,
    ListUnorderedComponent,
    ListTableComponent
  ]
})
export class SharedModule { }
