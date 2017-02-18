import { Component, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { Joke } from '../models/joke';
import { JokeService } from './joke.service';

@Component({
    selector: 'joke-detail',
    template: ` 
        <div>
            <h2>Joke:</h2>
            <div>{{joke.setup}}</div>
            <div>{{joke.punchline}}</div>
        </div>
        <div>
            <label><strong>lols:</strong> {{joke.lols}}</label>
            <label><strong>groans:</strong> {{joke.groans}}</label>
        </div>`,
    styles: [
        "div { padding-top: 10px;}"
    ],
    providers: [JokeService]
})
export class JokeDetailComponent{
    joke: Joke;

    constructor(private jokeService: JokeService, private route: ActivatedRoute) {
        this.joke = this.jokeService.getJoke(this.route.snapshot.params['id']);
    }
}
