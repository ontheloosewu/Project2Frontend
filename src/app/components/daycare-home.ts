import { Component } from "@angular/core";

@Component({
    template: `
        <h1>Home Page</h1>

        <app-graderegistrationform></app-graderegistrationform>
        <app-delete-grade></app-delete-grade>
        <add-student></add-student>
        <app-delete-student></app-delete-student>
        
    `,
    selector: "daycare-home"
})
export class DaycareHomeComponent {

}
