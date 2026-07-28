import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';


@Injectable({
  providedIn:'root'
})
export class CourseService {


  courses: Course[] = [

    {
      id:1,
      code:'ANG101',
      name:'Angular',
      credits:4,
      gradeStatus:'Completed'
    },

    {
      id:2,
      code:'JAVA101',
      name:'Java',
      credits:5,
      gradeStatus:'Ongoing'
    },

    {
      id:3,
      code:'PY101',
      name:'Python',
      credits:3,
      gradeStatus:'Completed'
    }

  ];


  getCourses(){

    return this.courses;

  }


  getCourseById(id:number){

    return this.courses.find(
      course => course.id === id
    );

  }

}