import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent {
 
  reactiveForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
    termsAndConditions: new FormControl(false, Validators.requiredTrue)
  });
  
 
  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
      return
    }
    else {
      console.log('Please fill out all required fields.');
    }
  }
}