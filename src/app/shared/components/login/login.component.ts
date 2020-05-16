import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators ,FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  minPw=8;
  registerForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl(null, [Validators.required,
    Validators.minLength(this.minPw)]);


  constructor(private router: Router,private formBuilder: FormBuilder) { }
 
 
  get f() { return this.registerForm.controls; }
  
  ngOnInit() {
  }


  login(){
  /*  this.registerForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
   
      
  });
*/
    this.router.navigateByUrl('/dashboard');
  
}
}
