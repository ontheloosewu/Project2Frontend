import { Component } from "@angular/core";

@Component({
    template: `
        <h1>Home Page</h1>
        <app-graderegistrationform></app-graderegistrationform>
        <add-student></add-student>
        <app-delete-grade></app-delete-grade>
    `,
    selector: "daycare-home"
})
export class DaycareHomeComponent {

}
