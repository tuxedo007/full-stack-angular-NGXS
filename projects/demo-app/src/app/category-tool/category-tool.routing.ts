import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './pages/categories/categories.component';

import { CategoriesResolverService } from '@tuxedo-utils/category-lib';
import { LoggedInGuardService, AllowedRolesGuardService } from '@tuxedo-utils/user-lib';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    resolve: {
      categories: CategoriesResolverService,
    },
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    data: {
      roles: ['user'],
      title: 'Categories Page',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryToolRoutingModule {}
