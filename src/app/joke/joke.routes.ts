import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { JokeListComponent } from './joke-list.component';
import { JokeDetailComponent } from './joke-detail.component';

export const ROUTES: Routes = [
    { path: '', component: JokeListComponent },
    { path: ':id', component: JokeDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class JokeRoutingModule {}