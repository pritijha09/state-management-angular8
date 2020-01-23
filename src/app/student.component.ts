import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from './student';
import {StudentService} from './student.service';
@Component({
  selector: 'hello',
  template: `
 <table border="1px" cellpadding="0" cellspacing="0">
 <tr>
 <th width="70px">Name</th>
 <th width="70px">Roll No</th>
 <th width="70px">Result</th>
 </tr>
 <tr *ngFor="let list of student | async">
 <td>{{list.name}}</td>
 <td>{{list.rollNumber}}</td>
 <td>{{list.result}}</td>
 </tr>
 </table>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class StudentComponent  {
public student: Observable<Student[]>;
constructor(private service: StudentService){
  this.student = service.getState();
    console.log( this.student)
}

}
