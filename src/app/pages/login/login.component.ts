import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { YsFormItemComponent } from '../../components/ys-form-item/ys-form-item.component';
import { YsInputDirective } from '../../components/ys-input.directive';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterModule,
        NgIf,
        YsFormItemComponent,
        YsInputDirective,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    showPassword: boolean = false;
    loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        remember: [false],
    });

    constructor(private formBuilder: NonNullableFormBuilder) {}

    /**
     * 登录并跳转页面
     */
    onLogin(): void {
        console.log(this.loginForm.value);
        if (this.loginForm.valid) {
            // 模拟发起请求
            setTimeout(() => {}, 3000)
        } else {
            Object.values(this.loginForm.controls).forEach((control) => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
    }

    /**
     * 切换密码显示
     */
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }
}
