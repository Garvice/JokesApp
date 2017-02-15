import { Component } from '@angular/core';
import { Joke } from '../models/joke'
@Component({
    selector: 'joke',
    template: `
    <div>
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
        this.joke = new Joke();
        this.joke.setup = "Why did the chicken cross the road?"
        this.joke.punchline = "To get to the other side."
        this.joke.groans = 30;
        this.joke.lols = 2;
    }

    joke:Joke;
}