import { Component } from '@angular/core';
import { details } from 'src/app/Interfaces/details';

@Component({
  selector: 'ms-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  details:details[]=[{

    employeeId : "12",
    firstName :"sana",
    lastName : "sai",
    dob : "12-9-2004",
    salary : 20000,

  },
 { employeeId : "13",
  firstName :"sana",
  lastName : "sai",
  dob : "7-15-2020",
  salary : 20000,
},
{ employeeId : "14",
firstName :"sana",
lastName : "sai",
dob : "11-9-2012",
salary : 20000,
},
{ employeeId : "15",
firstName :"sana",
lastName : "sai",
dob : "6-29-2021",
salary : 20000,
}
]

}
