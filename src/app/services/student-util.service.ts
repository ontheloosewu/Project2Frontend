import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, observable, Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentUtilService {


  constructor(private http:HttpClient){};

    private baseRoute : String = "http://localhost:8080"

   async registerStudent(student:Student) : Promise<Student>
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      const observable = this.http.post<Student>(`${this.baseRoute}/students`, JSON.stringify(student), httpOptions);
       return await firstValueFrom(observable);
    }

    async getStudentById(id: number): Promise<Student>{
      const observable = this.http.get<Student>(`http://localhost:8080/students/${id}`);
      const retrievedStudent = await firstValueFrom(observable);
      return retrievedStudent;
    }

    async deleteStudentById(id: number): Promise<String>{
      const observable = this.http.delete(`http://localhost:8080/students/${id}`, {responseType: 'text'});
      return await firstValueFrom(observable);
    }

    async getAllStudents(): Promise<Student[]>{
      const observable = this.http.get<Student[]>(`${this.baseRoute}/students`);
      const allStudents = await firstValueFrom(observable);
      return allStudents;
    }

    async deleteAllGradesByStudentId(id: number): Promise<any>{
      const observable = this.http.delete(`${this.baseRoute}/grades?sId=${id}`);
      return await firstValueFrom(observable);
    }
}
