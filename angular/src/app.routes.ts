import { Routes } from '@angular/router';

import { CoursesComponent } from './pages/courses/courses';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { NotFoundComponent } from './pages/not-found/not-found';
import { CourseDetailComponent } 
from './pages/course-detail/course-detail';
import { StudentProfileComponent } 
from './components/student-profile/student-profile';


export const routes: Routes = [

  {
    path: 'courses',
    component: CoursesComponent
  },
  {
 path:'student-profile',
 component:StudentProfileComponent
},

  {
    path: 'course/:id',
    component: CourseDetailComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'enrollment',
    component: EnrollmentFormComponent
  },

  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: NotFoundComponent
  }

];