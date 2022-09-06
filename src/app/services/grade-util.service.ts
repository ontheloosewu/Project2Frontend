
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom } from 'rxjs';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeUtilService {

  constructor(private http: HttpClient) { };

  async registerGrade(grade:Grade):Promise<Grade>{

    const observable = this.http.post<Grade>("http://localhost:8080/grades",grade)
    const savedGrade = await firstValueFrom(observable);
    return savedGrade;
  }

  async deleteGradeById(id: number): Promise<String>{
    try{
        const observable = this.http.delete(`http://localhost:8080/grades/${id}`, {responseType: 'text'});
        return await firstValueFrom(observable);
    }catch (error){
      return "FAILURE";
    }
    
  }

  async getAllGradesByStudentId(id:number):Promise<Grade[]>{
    const observable = this.http.get<Grade[]>(`http://localhost:8080/grades/${id}`);
    const grades = await firstValueFrom(observable);
    return grades;
  }
}
