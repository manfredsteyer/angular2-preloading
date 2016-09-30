import { Component  } from '@angular/core';
import {FlugService} from "../../flug/services/flug.service";

@Component({
    template: `
        <h2>{{info}}</h2>
    `
})
export class InfoComponent {

    info = "Info!";

    constructor() {
    }


}