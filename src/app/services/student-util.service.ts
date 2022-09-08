import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, observable, Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentUtilService {


  constructor(private http:HttpClient){};

    private baseRoute : string = "http://localhost:8080"
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

   async registerStudent(student:Student) : Promise<Student>
    {
      const observable = this.http.post<Student>(`${this.baseRoute}/students`, JSON.stringify(student), this.httpOptions);
       return await firstValueFrom(observable);
    }

    async getStudentById(id: number): Promise<Student>{
      const observable = this.http.get<Student>(`http://localhost:8080/students/${id}`, this.httpOptions);
      const retrievedStudent = await firstValueFrom(observable);
      return retrievedStudent;
    }

    async deleteStudentById(id: number): Promise<string>{
      const observable = this.http.delete<string>(`http://localhost:8080/students/${id}`, this.httpOptions);
      return await firstValueFrom(observable);
    }

    async getAllStudents(): Promise<Student[]>{
      const observable = this.http.get<Student[]>(`${this.baseRoute}/students`, this.httpOptions);
      const allStudents = await firstValueFrom(observable);
      return allStudents;
    }

    async deleteAllGradesByStudentId(id: number): Promise<any>{
      const observable = this.http.delete(`${this.baseRoute}/grades?sId=${id}`, this.httpOptions);
      return await firstValueFrom(observable);
    }
}
