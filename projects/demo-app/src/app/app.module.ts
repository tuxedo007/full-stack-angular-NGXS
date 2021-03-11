import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';

import { AuthorizationInterceptorService } from '@tuxedo-utils/user-lib';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';

import { AppStateService } from './services/app-state.service';

import { UserLibModule } from '@tuxedo-utils/user-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    UserLibModule,
    NgxsModule.forRoot([AppStateService]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptorService, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





















































// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FlexLayoutModule } from '@angular/flex-layout';

// import { MatListModule } from '@angular/material/list';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatTableModule } from '@angular/material/table';
// import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
// import { CategoriesComponent } from './pages/categories/categories.component';
// import { EmployeesComponent } from './pages/employees/employees.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NavComponent } from './components/nav/nav.component';

// import { AuthorizationInterceptorService } from '@tuxedo-utils/user-lib';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { LogoutComponent } from './pages/logout/logout.component';

// import { UserLibModule } from '@tuxedo-utils/user-lib';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     CategoriesComponent,
//     EmployeesComponent,
//     NavComponent,
//     ProfileComponent,
//     LogoutComponent
//   ],
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatListModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatButtonModule,
//     MatIconModule,
//     MatCardModule,
//     FlexLayoutModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatMenuModule,
//     MatTableModule,
//     MatSnackBarModule,
//     UserLibModule,
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptorService, multi: true },
//     { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
