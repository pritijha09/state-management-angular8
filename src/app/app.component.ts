import { Component } from '@angular/core';
import {StudentService} from './student.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
constructor(private service: StudentService){}

  addStudent(name: string, rollnumber: string, result: string){
    debugger
    this.service.addStudent(name, rollnumber, result);
  }
}
