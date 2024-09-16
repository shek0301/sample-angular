export class Employee{
    status!:string;
    data!:Array<EmployeeDetails>;
    message!:string;

}

export class EmployeeDetails{
    id!:number;
    employee_name!:string;
    employee_salary!:number;
    employee_age!:number;
    profile_image!:string;
    
}