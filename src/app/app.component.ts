import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "../parent/parent.component";
import { AttributesComponent } from "../attributes/attributes.component";
import { ChildComponent } from "../child/child.component";
import { ServicesComponent } from "../Services/services.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, AttributesComponent, ChildComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment2';
}
