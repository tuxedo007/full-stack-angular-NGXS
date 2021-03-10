import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { CategoryLibModule } from '@tuxedo-utils/category-lib';
import { CategoryToolRoutingModule } from './category-tool.routing';
import { CategoriesComponent } from './pages/categories/categories.component';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    CategoryLibModule,
    CategoryToolRoutingModule,
  ]
})
export class CategoryToolModule { }
