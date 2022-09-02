
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentUtilService {


  constructor(private httpClient:HttpClient){};

    private baseRoute : String = "http://localhost:8080"
    
   async registerStudent(student:Student) : Promise<Student>
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
  
        })
      };
      
      const observable = this.httpClient.post<Student>(`${this.baseRoute}/students`, JSON.stringify(student), httpOptions);

       return await firstValueFrom(observable);
    }
}
