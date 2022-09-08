
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom } from 'rxjs';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeUtilService {

  constructor(private http: HttpClient) { };

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
    let jwt = localStorage.getItem("userInfo");
    return jwt ? jwt:"";

  }

  async registerGrade(grade:Grade):Promise<Grade>{

    const observable = this.http.post<Grade>("http://localhost:8080/grades",grade, this.httpOptions)
    const savedGrade = await firstValueFrom(observable);
    return savedGrade;

  }

  async deleteGradeById(id: number): Promise<String>{
    try{
        const observable = this.http.delete<string>(`http://localhost:8080/grades/${id}`, this.httpOptions);
        return await firstValueFrom(observable);
    }catch (error){
      return "FAILURE";
    }
    
  }

  async getAllGradesByStudentId(id:number):Promise<Grade[]>{
    const observable = this.http.get<Grade[]>(`http://localhost:8080/grades/${id}`, this.httpOptions);
    const grades = await firstValueFrom(observable);
    return grades;
  }
}
