import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Grade } from 'src/app/models/grade';

@Component({
  selector: 'app-delete-grade',
  templateUrl: './delete-grade.component.html',
  styleUrls: ['./delete-grade.component.css']
})
export class DeleteGradeComponent{


  constructor(private httpClient:HttpClient) {};

  gradename:string = "";

  async deleteGrade(){
    const observable = this.httpClient.delete(`http://localhost:8080/grades/${this.gradename}`);
    const body = await firstValueFrom(observable);
  }

  

}
