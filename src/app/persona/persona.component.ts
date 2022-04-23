import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['../app.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;
    autor:string = 'By ® FsDk';
 /* constructor(indice: number, persona: Persona) {
    
  this.persona = persona;
  this.indice = indice;
  console.log(this.indice);
  }*/

  ngOnInit(): void {
  }

}
