import { Component } from "@angular/core";


@Component({
    template: `
        <div class="home-page">
            <h1>The Superhero Babysitter's Daycare</h1>
            <h3>With great power comes great babysitting ability</h3>
        </div>

    
        <div class = "reviews">
            <h2>Reviews</h2>
        </div>

        <Div class="wrapper">
        <mat-card class="hulk">
            <mat-card-header>
                <div mat-card-avatar class="hulk-header-image"></div>
                <mat-card-title>Hulk</mat-card-title>
                <mat-card-subtitle>HULK SMASH</mat-card-subtitle>
            </mat-card-header>
                <img mat-card-image src="https://www.nicepng.com/png/detail/965-9650014_marvel-sticker-by-hulk-cartoon.png" height="300px" width="200px">
                <mat-card-content>
                        <p>HULK APPROVE!!! :)</p>
                </mat-card-content>
        </mat-card>

        <mat-card class="captain">
            <mat-card-header>
                <div mat-card-avatar class="captain-header-image"></div>
                <mat-card-title>Captain America</mat-card-title>
                <mat-card-subtitle>Avengers Assemble</mat-card-subtitle>
            </mat-card-header>
                <img mat-card-image src="https://qph.cf2.quoracdn.net/main-qimg-e56cc46bc7700ef7320133d2b7d66781-pjlq" height="300px" width="200px">
                <mat-card-content>
                        <p>That's America's Daycare</p>
                </mat-card-content>
        </mat-card>

        <mat-card class="iron">
            <mat-card-header>
                <div mat-card-avatar class="iron-header-image"></div>
                <mat-card-title>Iron Man</mat-card-title>
                <mat-card-subtitle>I am Iron Man</mat-card-subtitle>
            </mat-card-header>
                <img mat-card-image src="https://image.api.playstation.com/vulcan/img/rnd/202010/2716/EN4RmIEX4nyQfWv6Vzi2eQ4g.png" height="300px" width="200px">
                <mat-card-content>
                        <p>Even genius billionaire playboy philantrophists need a break</p>
                </mat-card-content>
        </mat-card>
        <mat-card class="professorx">
            <mat-card-header>
                <div mat-card-avatar class="professorx-header-image"></div>
                <mat-card-title>Professor Xavier</mat-card-title>
                <mat-card-subtitle>They see me rolling</mat-card-subtitle>
            </mat-card-header>
                <img mat-card-image src="https://qph.cf2.quoracdn.net/main-qimg-86370bea5d7a667c06978fbb94735c62-lq" height="300px" width="200px">
                <mat-card-content>
                        <p>The daycare teachers are just as gifted as our students</p>
                </mat-card-content>
        </mat-card>

        <mat-card class="storm">
            <mat-card-header>
                <div mat-card-avatar class="storm-header-image"></div>
                <mat-card-title>Storm</mat-card-title>
                <mat-card-subtitle>Few can weather the storm</mat-card-subtitle>
            </mat-card-header>
                <img mat-card-image src="https://i.pinimg.com/originals/4c/0d/11/4c0d11af1a9389b824b46e5e5f112f00.jpg" height="300px" width="200px">
                <mat-card-content>
                        <p>It's the destiny of great teachers to see these kids grow!</p>
                </mat-card-content>
        </mat-card>

        <mat-card class="batman">
            <mat-card-header>
                <div mat-card-avatar class="batman-header-image"></div>
                <mat-card-title>The Batman</mat-card-title>
                <mat-card-subtitle>I'm Batman</mat-card-subtitle>
            </mat-card-header>
                <img mat-card-image src="https://i.pinimg.com/originals/78/6b/ab/786bab03f14a149e726174605df22e85.jpg" height="300px" width="200px">
                <mat-card-content>
                        <p>I'm Batman</p>
                </mat-card-content>
        </mat-card>
        </Div>
            
        


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
