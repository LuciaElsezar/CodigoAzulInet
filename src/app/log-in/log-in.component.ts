import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  formularioLogIn = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mantenerSesion: ['']
  });

  adminLogIn(){
    if(this.formularioLogIn.valid){
      if(this.formularioLogIn.controls['email'].value == "escuela713@gmail.com" &&
      this.formularioLogIn.controls['password'].value == "12345678"){
        this.router.navigateByUrl("/dashboard-admin");
      }
    }
  }
  constructor(private fb:FormBuilder, private router:Router) {}
}
