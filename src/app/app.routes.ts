import { Routes } from '@angular/router';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import { AttributesComponent } from '../attributes/attributes.component';
import { ServicesComponent } from '../Services/services.component';

export const routes: Routes = [
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'attri',component:AttributesComponent},
    {path:'service',component:ServicesComponent}
];
