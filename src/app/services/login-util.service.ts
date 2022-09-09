import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppUser } from '../models/appuser';

@Injectable({
  providedIn: 'root'
})
export class LoginUtilService {

  constructor(private http: HttpClient) { }

  async validateLogin(username:String, password:String): Promise<AppUser>{
    const credentials = {username: username, password: password};
    try{
      const observable = this.http.post<AppUser>("http://localhost:8080/login", credentials);
      const jwt = await firstValueFrom(observable);
      return jwt;
    } catch (error){
      return {jwt:"", role: ""};
    }
  }
}
