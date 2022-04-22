import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado De Personas';
  personas: Persona[] = [new Persona('Jose Antonio', 'Gimenez'), new Persona('Belen', 'Martinez'), new Persona('Antonio','Gimenez'),new Persona('Alba','Martinez'), new Persona('Jose Manuel','Berrios')];
  nombreInput:string = '';
  apellidoInput:string = '';

}
