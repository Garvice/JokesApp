import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {NgModule} from "@angular/core";

export const ROUTES: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'jokes'},
    {path: 'jokes', loadChildren: './joke/joke.module#JokeModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
