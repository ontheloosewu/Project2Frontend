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
      const observable = this.http.post<AppUser>("https://daycare-app.agreeablemushroom-6e40775d.eastus.azurecontainerapps.io/login", credentials);
      const jwt = await firstValueFrom(observable);
      return jwt;
    } catch (error){
      return {jwt:"", role: ""};
    }
  }
}
