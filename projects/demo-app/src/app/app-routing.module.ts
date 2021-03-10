import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInGuardService } from '@tuxedo-utils/user-lib';
import { AllowedRolesGuardService } from '@tuxedo-utils/user-lib';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    data: {
      roles: ['user'],
      title: 'Profile Page',
    },
  },
  // lazy loading of category-tool module
  {
    path: 'categories',
    loadChildren: () =>
      import('./category-tool/category-tool.module')
        .then(m => m.CategoryToolModule),
  },
  // lazy loading of employee-tool module
  {
    path: 'employees',
    loadChildren: () =>
      import('./employee-tool/employee-tool.module')
        .then(m => m.EmployeeToolModule),
  },
  { path: 'login', pathMatch: 'full', redirectTo: '/' },
  { path: 'notauthorized', pathMatch: 'full', redirectTo: '/' },
  { path: 'logout', pathMatch: 'full', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }














// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './pages/home/home.component';
// import { CategoriesComponent } from './pages/categories/categories.component';
// import { EmployeesComponent } from './pages/employees/employees.component';
// import { ProfileComponent } from './pages/profile/profile.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', component: HomeComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'categories', component: CategoriesComponent },
//   { path: 'employees', component: EmployeesComponent },
//   { path: 'login', pathMatch: 'full', redirectTo: '' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
