import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CusBuiService } from '../GetService/cus-bui.service';
import { CommonModule } from '@angular/common';
import { User } from '../Models/User';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  apidata !: Array<User>;

  getUrl: string = 'https://dummy.restapiexample.com/api/v1/employees';
  postUrl: string='https://dummy.restapiexample.com/api/v1/create';
  getResponse!:Employee

  fakedata:object = {"name":"test","salary":"123","age":"23"}

  constructor(private custom:CusBuiService){
    this.custom.get(this.getUrl).subscribe(response=>{
      
      console.log(response);

    });

    this.custom.post(this.postUrl,this.fakedata).subscribe(response=>{
      console.log(response);
    });

  }

  onSub(){
    this.apidata = this.custom.apdata;
  }

  onUpper(){
    this.custom.toUpper(this.apidata);
  }

}
