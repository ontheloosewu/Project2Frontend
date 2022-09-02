
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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
}
