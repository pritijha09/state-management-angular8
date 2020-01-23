import {Injectable} from '@angular/core';
import {Student} from './student';
import {Store} from './store.class';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends Store<Student[]>{

  constructor(){
    super([{name: 'abcd', rollNumber: '01', result:'Pass'}]);
  }

  addStudent(name: string, rollNumber: string,result: string) {
    const newState = [...this.getValue(), {name, rollNumber, result}];
    console.log(newState);
    this.setState(newState);
  }
}