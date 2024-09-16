import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  userName:string='';
  age:number=0;
  greetings:string = ''

  DoAction(value:string){
    this.greetings = value;
  }

  ngOnInit(){
    console.log("Parent Component Intialised!!!")
  }
}

