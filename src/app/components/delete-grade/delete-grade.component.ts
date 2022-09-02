import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Grade } from 'src/app/models/grade';
import { GradeUtilService } from 'src/app/services/grade-util.service';

@Component({
  selector: 'app-delete-grade',
  templateUrl: './delete-grade.component.html',
  styleUrls: ['./delete-grade.component.css']
})
export class DeleteGradeComponent{


  constructor(private gradeService:GradeUtilService) {};

  id:number = 0;

  async deleteGrade(){
    await this.gradeService.deleteGradeById(this.id);
  }
}
