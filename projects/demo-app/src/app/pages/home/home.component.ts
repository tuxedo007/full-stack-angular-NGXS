import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { UsersService } from '@tuxedo-utils/user-lib';
import { LoginForm } from '@tuxedo-utils/user-lib';
import { Observable } from 'rxjs';
import { ClearErrorMessage } from '@tuxedo-utils/shared-lib';
import { AppState } from '../../models/AppState';

import { CurrentUserState, LoginUser } from '@tuxedo-utils/user-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Select((state: { app: AppState }) => state.app.errorMessage)
  public errorMessage$: Observable<string> | undefined;

  @Select((state: { currentUser: CurrentUserState }) => state.currentUser)
  public currentUser$: Observable<CurrentUserState> | undefined;

  constructor(private usersSvc: UsersService, private store: Store) { }

  ngOnInit(): void {
  }

  doLogin(loginForm: LoginForm): void {

    this.store.dispatch(new LoginUser(loginForm.username, loginForm.password));

    // this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe({
    //   next: () => {
    //     // this.errorMessage = '';
    //     this.store.dispatch(new ClearErrorMessage());
    //   },
    //   error: (err) => {
    //     if (err.status === 404) {
    //       // this.errorMessage = 'Username and password not found.';
    //       this.store.dispatch(new SetErrorMessage('Username and password not found.'));
    //     } else {
    //       // this.errorMessage = 'Unknown login error.';
    //       this.store.dispatch(new SetErrorMessage('Unknown login error.'));
    //     }
    //   }
    // });
  }

  doClear(): void {
    console.log('clicked clear');
    // this.errorMessage = '';
    this.store.dispatch(new ClearErrorMessage());
  }

}







// import { Component, OnInit } from '@angular/core';

// import { UsersService } from '../../services/users.service';
// import { CurrentUser } from '../../models/CurrentUser';
// import { LoginForm } from '../../models/LoginForm';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   get currentUser(): CurrentUser | null {
//     return this.usersSvc.getCurrentUser();
//   }

//   constructor(private usersSvc: UsersService) { }

//   ngOnInit(): void {
//   }

//   doLogin(loginForm: LoginForm): void {
//     this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe();
//   }

//   doClear(): void {
//     console.log('clicked clear');
//   }

// }




// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-home',
// //   templateUrl: './home.component.html',
// //   styleUrls: ['./home.component.css']
// // })
// // export class HomeComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }
