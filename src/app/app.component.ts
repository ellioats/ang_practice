import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student, WebService } from './web.service';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students : Student[] = []; // defines student arr
  title = 'lab08-elliotc';

  // inject webservice
  constructor(web : WebService) {
    web.getStudents().subscribe({
      next: json => {
        this.students = json;
      },
      error: e => {
        console.log(e);
      }
    });
  }

}
