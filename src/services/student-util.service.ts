import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentUtilService {

  constructor(private http: HttpClient) { }

  async getStudentById(id: number): Promise<Student>{
    const observable = this.http.get<Student>(`http://localhost:8080/students/${id}`);
    const retrievedStudent = await firstValueFrom(observable);
    return retrievedStudent;
  }

  async deleteStudentById(id: number): Promise<String>{
    const observable = this.http.delete(`http://localhost:8080/students/${id}`, {responseType: 'text'});
    return await firstValueFrom(observable);
  }
}
