import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUtilService {

  constructor(private http: HttpClient) { }

  async validateLogin(username:String, password:String): Promise<string>{
    const credentials = {username: username, password: password};
    try{
      const observable = this.http.post("http://localhost:8080/login", credentials, {responseType: 'text'});
      const jwt = await firstValueFrom(observable);
      return jwt;
    } catch (error){
      return 'FAILURE';
    }
  }
}
