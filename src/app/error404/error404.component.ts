import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(
    private router: Router,
    private route : ActivatedRoute, 
  ) { }

  ngOnInit(): void {
  }

  backToCharacters = function() {
    this.router.navigateByUrl('/characters');
  };

}
