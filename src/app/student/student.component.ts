import { Component, Input } from '@angular/core';
import { Student } from '../web.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  // getting data from parent component
  @Input() student : Student = {firstName:"",lastName:"",email:""};
  
  ngOnInit() {
    console.log("fetching data for student: " + this.student.firstName);
  }

}
