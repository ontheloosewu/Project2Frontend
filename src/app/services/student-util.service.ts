import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, observable, Observable } from 'rxjs';
import { AppUser } from '../models/appuser';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentUtilService {


  constructor(private http:HttpClient){};

    private baseRoute : string = "https://daycare-app.agreeablemushroom-6e40775d.eastus.azurecontainerapps.io";
    private httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'auth' : ''
      })
    }

    updateJWT(): void
    {
      let jwt = localStorage.getItem("userJWT");

      if (jwt === null)
        return;

        this.httpOptions.headers = this.httpOptions.headers.set('auth', jwt);
    }

   async registerStudent(student:Student) : Promise<Student>
    {
      this.updateJWT();
      console.log("registerStudent(): " + this.httpOptions.headers);
      const observable = this.http.post<Student>(`${this.baseRoute}/students`, JSON.stringify(student), this.httpOptions);
       return await firstValueFrom(observable);
    }

    async getStudentById(id: number): Promise<Student>{
      this.updateJWT();
      const observable = this.http.get<Student>(`${this.baseRoute}/students/${id}`, this.httpOptions);
      const retrievedStudent = await firstValueFrom(observable);
      return retrievedStudent;
    }

    async deleteStudentById(id: number): Promise<string>{
      this.updateJWT();
      const observable = this.http.delete<string>(`${this.baseRoute}/students/${id}`, this.httpOptions);
      return await firstValueFrom(observable);
    }

    async getAllStudents(): Promise<Student[]>{
      this.updateJWT();
      const observable = this.http.get<Student[]>(`${this.baseRoute}/students`, this.httpOptions);
      const allStudents = await firstValueFrom(observable);
      return allStudents;
    }

    async deleteAllGradesByStudentId(id: number): Promise<any>{
      this.updateJWT();
      const observable = this.http.delete(`${this.baseRoute}/grades?sId=${id}`, this.httpOptions);
      return await firstValueFrom(observable);
    }
}
