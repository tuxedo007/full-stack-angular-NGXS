import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ChangePasswordForm } from '../../models/ChangePasswordForm';
import { confirmValue } from '@tuxedo-utils/shared-lib';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  @Output()
  changePassword = new EventEmitter<ChangePasswordForm>();

  changePasswordForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.changePasswordForm = this.fb.group({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }, { validators: [confirmValue('newPassword', 'confirmPassword')] });
  }

  // tslint:disable-next-line: typedef
  public doChangePassword() {
    if (this.changePasswordForm.valid) {
      this.changePassword.emit(this.changePasswordForm.value);
    }
  }

}
