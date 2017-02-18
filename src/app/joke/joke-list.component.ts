import { Component, Input, Output } from '@angular/core';
import {Router} from "@angular/router";

import { Joke } from '../models/joke'
import { JokeService } from './joke.service';

@Component({
    selector: 'joke-list',
    template: `
        <div *ngFor="let joke of jokes">
        <div>
            <div (click)="onSelect(joke)">{{joke.setup}}</div>
        </div>
    </div>
    `,
    providers: [JokeService]
})
export class JokeListComponent{
    jokes: Array<Joke>; 

    constructor( private router: Router, private jokeService: JokeService){
        this.jokes = this.jokeService.getJokes();
    }

    onSelect(joke: Joke): void {
        this.router.navigateByUrl(`/jokes/${joke.id}`);
    }
}