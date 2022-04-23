import { Component, Input, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { Inject } from '@angular/core';
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
  autor:string = 'By ® FsDk';

  agregarPersona(){
   let persona1 = new Persona(this.nombreInput, this.apellidoInput);
   if (persona1.nombre === '') {
    return  alert('Este campo es obligatorio');
   }
   if (persona1.apellido === '') {
    return  alert('Este campo es obligatorio');
   }
   else { 
  
     this.personas.push(persona1);
   }

  }    
}


