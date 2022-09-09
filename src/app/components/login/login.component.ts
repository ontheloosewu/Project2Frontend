import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/appuser';
import { LoginUtilService } from 'src/app/services/login-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String = "";
  password:String = "";

  constructor(private loginService:LoginUtilService) { }

  ngOnInit(): void {
  }

  async loginUser(){
    const user = await this.loginService.validateLogin(this.username, this.password);
    if(user.jwt === ""){
      return alert('Failed to login');
    } else {
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("userJWT", user.jwt);
      alert('Successful login');
    }
  }

}
