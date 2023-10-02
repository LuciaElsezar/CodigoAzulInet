import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup;

  ngOnInit(): void {
    this.logInForm = this.formularioLogIn();
  }

  constructor(private fb:FormBuilder, private router:Router) {
  }

  formularioLogIn(): FormGroup {
    return this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mantenerSesion: ['']
    })
  }
  
  logIn(){
    if(this.logInForm.valid){
      if(this.logInForm.controls['email'].value == "escuela713@gmail.com" &&
      this.logInForm.controls['password'].value == "12345678"){
        this.router.navigateByUrl("/dashboard-admin");
      }
    }
  }

}
