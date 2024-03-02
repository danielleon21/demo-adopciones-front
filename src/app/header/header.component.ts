import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    mobileHidden = true
    href = ""

    constructor(private router: Router) { }

    ngOnInit(){
        this.href = this.router.url
        console.log(this.router.url)
    }

    toggleNavbar = () => {
        this.mobileHidden = !this.mobileHidden
    }
}
