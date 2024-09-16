import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {
  check : boolean = false;
  city : Array<string> = ['Vandavasi','Arcot','Vellore','Arni','Chennai','Cheyyar'];
  attr : string = "background-color:blue"
  selectedValue : string = "";

}
