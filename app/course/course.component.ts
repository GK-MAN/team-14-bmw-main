import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'course.component.html',
    styleUrls: ['./ss_course.component.css'] 
})

export class CourseComponent implements OnInit, OnDestroy {

    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        
    }

    newCourseClicked = false;

  course = [
    { name: 'COVID-19 Protocals', description: '', duration: '2 week'},
    { name: 'Sexual Harrassment', description: '', duration: '1 week'},
  ];

  //color;

  

  model: any = {};
  model2: any = {}; 

  addCourse() {
    this.course.push(this.model);
    this.model = {};
  }

  deleteCourse(i) {
    this.course.splice(i);
    console.log(i);
  }

  myValue;

  editCourse(editCourseInfo) {
    this.model2.name = this.course[editCourseInfo].name;
    this.model2.description = this.course[editCourseInfo].description;
    this.model2.duration = this.course[editCourseInfo].duration;
    this.myValue = editCourseInfo;
  }

  updateCourse() {
    let editUser_RoleInfo = this.myValue;
    for(let i = 0; i < this.course.length; i++) {
      if(i == editUser_RoleInfo) {
        this.course[i] = this.model2;
        this.model2 = {};
      }
    }
    }

    addNewCourseBtn() {
        this.newCourseClicked = !this.newCourseClicked;
      }

}