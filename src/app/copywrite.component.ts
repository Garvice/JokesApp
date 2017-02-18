import { Component, Input } from '@angular/core'

@Component({
    selector: 'copywrite',
    template: `<div id="copywrite"> &copy; {{year}} Neward Associates </div>`,
    styles: [
        "#copywrite { margin-top: 25px; }" 
    ]
})
export class CopywriteComponent{
    @Input() year: string;
}