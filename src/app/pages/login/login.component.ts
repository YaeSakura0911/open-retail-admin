import { Component } from '@angular/core';
import {
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        remember: [false],
    });

    constructor(private formBuilder: NonNullableFormBuilder) {}

    /**
     * 登录并跳转页面
     */
    handleLogin(): void {
        if (this.loginForm.valid) {
            setTimeout(() => {
                
            }, 3000);
        } else {
            
        }
    }
}
