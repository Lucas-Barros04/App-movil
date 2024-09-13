import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {

  @Input() icon!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  constructor() { }

  ngOnInit() {}

}
