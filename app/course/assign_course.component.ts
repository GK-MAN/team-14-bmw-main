import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'assign_course.component.html',
    styleUrls: ['./ss_course.component.css'] 
})

export class Assign_CourseComponent implements OnInit, OnDestroy {

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

    newUser_RoleClicked = false;

  onboarder = [
    { name: 'Steven', id: '12345'},
    { name: 'Mark', id: '23456'},
    { name: 'John', id: '34567'},
    { name: 'Bob', id: '45678'},
  ];

  course = [
    { name: 'Sexual Harrasment Course', id: '1111'},
    { name: 'Code of Conduct Course', id: '2222'},
    { name: 'Training Course', id: '3333'},
  ];

  onboarder_course = [
    { 
      onboarder_id: '', 
      course_id: '',
      registration_date: ''
  },

  ];

  color;

  

  model: any = {};
  model2: any = {};

  addOnboarder_Course() {
    this.onboarder_course.push(this.model);
    this.model = {};
  }

  myValue;

}