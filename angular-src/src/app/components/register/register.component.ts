import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  password: String;
  email: String;

  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }
  
  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email
    };

    // Require fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessages.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('Email is not valid', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }
}
