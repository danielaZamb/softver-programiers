import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-nav',
  templateUrl: './principal-nav.component.html',
  styleUrls: ['./principal-nav.component.css']
})
export class PrincipalNavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
