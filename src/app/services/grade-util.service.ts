
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom } from 'rxjs';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeUtilService {

  constructor(private http: HttpClient) { };

  private baseRoute : string = "https://daycare-app.agreeablemushroom-6e40775d.eastus.azurecontainerapps.io";
  private httpOptions = 
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'auth' : this.getJWT()
    })
  }

  // gets user info from local storage if it exists. otherwise returns empty string
  getJWT():string 
  {
    let jwt = localStorage.getItem("userJWT");

    if (jwt === null)
      return "";
      
    return jwt;
  }

  async registerGrade(grade:Grade):Promise<Grade>{

    const observable = this.http.post<Grade>(`${this.baseRoute}/grades`,grade, this.httpOptions)
    const savedGrade = await firstValueFrom(observable);
    return savedGrade;

  }

  async deleteGradeById(id: number): Promise<String>{
    const observable = this.http.delete<string>(`${this.baseRoute}/grades/${id}`, this.httpOptions);
    return await firstValueFrom(observable);
  }

  async getAllGradesByStudentId(id:number):Promise<Grade[]>{
    const observable = this.http.get<Grade[]>(`${this.baseRoute}/grades/${id}`, this.httpOptions);
    const grades = await firstValueFrom(observable);
    return grades;
  }
}
