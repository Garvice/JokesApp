import { Injectable } from "@angular/core";

import { Joke } from '../models/joke';

const JOKES:Array<Joke> = [
            {
                id: 0,
                setup: "Why did the chicken cross the road?",
                punchline: "To get to the other side!",
                groans: 40,
                lols: 10
            },
            {
                id: 1,
                setup: "What did the pig say at the beach on a hot summer's day?",
                punchline: "I'm bakin'.",
                groans: 20,
                lols: 30
            },
            {   
                id: 2,
                setup: "What's dangerous and swings from trees?",
                punchline: "A monkey with a chainsaw.",
                groans: 15,
                lols: 25
            }
        ];

@Injectable()
export class JokeService {
    getJokes(): Array<Joke> {
        return JOKES;
    }

    getJoke(id:string): Joke {
        return JOKES.find(joke => joke.id === parseInt(id, 10));
    }
}