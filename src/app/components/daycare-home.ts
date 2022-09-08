import { Component } from "@angular/core";


@Component({
    template: `
        <div class="home-page">
            <h1><strong>The Superhero Babysitter's Daycare</strong></h1>
            <h3>With great power comes great babysitting ability</h3>
        </div>

    
        <div class = "reviews">
            <h2>Reviews</h2>
        </div>
        <div>
            <p>The Incredible Hulk: HULK SMASH! (two thumbs up!)</p>
            <p>Captain America: That's America's Daycare!</p>
            <p>Iron Man: Even genius billionaire playboy philantrophists need a break</p>
            <p>Professor X: The daycare teachers are just as gifted as our students</p>
            <p>Storm: It's the destiny of great teachers to see these kids grow!</p>
            <p>Batman: I'm Batman</p>
        </div>


        <!-- <app-graderegistrationform></app-graderegistrationform>
        <app-delete-grade></app-delete-grade>
        <add-student></add-student>
        <app-delete-student></app-delete-student>
        <app-viewgradespage></app-viewgradespage>
        <app-search-student></app-search-student> -->
    `,
    selector: "daycare-home"
})
export class DaycareHomeComponent {

}
