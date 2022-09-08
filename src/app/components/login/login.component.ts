import { Component, OnInit } from '@angular/core';
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
    const jwt = await this.loginService.validateLogin(this.username, this.password);
    if(jwt === "FAILURE"){
      return alert('Failed to login');
    } else {
      localStorage.setItem("userInfo", jwt);
      alert('Successful login');
    }
  }

}
