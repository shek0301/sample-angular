import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() name:string|undefined;
  @Input() age:number|undefined;
  @Output() greet = new EventEmitter<string>();
  greetings : string='';

  previousChange!:number | string;
  currentChange!:number | string;

  passDataToParent()
  {
    this.greet.emit(this.greetings);
  }
  ngOnInit()
  {
    console.log("Child Component Intialised!!!");
  
  }

  ngOnChanges(changes:SimpleChanges)
  {
    console.log(changes);
    console.log("Onchanges Called in CHILD");
    this.previousChange = changes['age'].previousValue;
    this.currentChange = changes['age'].currentValue;
  }


}
