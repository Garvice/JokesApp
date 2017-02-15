import { Component } from '@angular/core';
import { Joke } from '../models/joke'
@Component({
    selector: 'joke',
    template: `
    <div *ngFor="let joke of jokes">
        <div>
            <h4>Joke:</h4>
            <div>{{joke.setup}}</div>
            <div>{{joke.punchline}}</div>
        </div>
        <div>
            <label>lols: {{joke.lols}}</label>
        </div>
        <div>
            <div>groans: {{joke.groans}}</div>
        </div>
    </div>`

})
export class JokeComponent {
    constructor(){
        this.jokes = [
            {
                setup : "Why did the chicken cross the road?",
                punchline: "To get to the other side!",
                groans: 40,
                lols: 10
            },
            {
                setup: "What did the pig say at the beach on a hot summer's day?",
                punchline: "I'm bakin'.",
                groans: 20,
                lols: 30
            },
            {   
                setup: "What's dangerous and swings from trees?",
                punchline: "A monkey with a chainsaw.",
                groans: 15,
                lols: 25
            }
        ]
    }

    jokes:Array<Joke>


}