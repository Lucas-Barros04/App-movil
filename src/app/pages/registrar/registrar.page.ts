import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirigir(){
    this.router.navigate(['/inicio'])
  }
}
