import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

import { UsersService } from '@tuxedo-utils/user-lib';
import { ChangePasswordForm } from '@tuxedo-utils/user-lib';

import { CurrentUserState } from '@tuxedo-utils/user-lib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Select((state: { currentUser: CurrentUserState }) => state.currentUser)
  public currentUser$: Observable<CurrentUserState> | undefined;

  constructor(public usersSvc: UsersService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  public doChangePassword(changePasswordForm: ChangePasswordForm) {
    // tslint:disable-next-line: no-non-null-assertion
    const { username, userKind } = this.usersSvc.getCurrentUser()!;

    this.usersSvc.changePassword(
      username, userKind,
      changePasswordForm.currentPassword,
      changePasswordForm.newPassword).subscribe();
  }

}
