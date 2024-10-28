import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Student {

  firstName : string;
  lastName : string;
  email : string;
}


@Injectable({
  providedIn: 'root'
})
export class WebService {
  // inject httpclient service
  constructor(private http : HttpClient) { 

    /** 
     * point of confusion: I'm not sure if this is supposed to be empty. I assume it is, as the only thing you really need to construct the service is
     * an instance of httpclient
     */

  }

  getStudents() : Observable<Student[]> {
    /*
      point of confusion: unsure of what to use as the URL. I know it cannot be static because we're using it in the http get function. But, I'm not 
      sure where to put the .json file in the project directory, because It has to be front-end accessible in order to access it from the http get operation

      poc: unsure what the return type observable<Students[]> means in this context. it returns an array of students, but what does observable mean??

    */
    const URL = "https://ejd.songho.ca/syst24444/students_2024.json";
    return this.http.get<Student[]>(URL);
  }


}


