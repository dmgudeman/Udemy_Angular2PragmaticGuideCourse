import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autogrow/>
    <ul>
        <li *ngFor=" let course of courses">{{ course }}</li>
    </ul>
    `
})
export class CoursesComponent {
    courses: string [];
     title:string = "The title of courses page";
    constructor(private courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
