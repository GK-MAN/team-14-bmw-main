import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({ 
    templateUrl: 'register_employee.component.html',
    styleUrls: ['./ss_administrator.component.css']
})
export class Register_EmployeeComponent implements OnInit, OnDestroy {
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

    employee = [
      { 
        first_name: '', 
        middle_name: '',
        last_name: '', 
        title: '',
        gender: '', 
        id_number: '',
        contact_number: '', 
        department: '',
        job_title: '', 
        address: '' 
      },
    ];
  
    color;
  
    
  
    model: any = {};
    model2: any = {}; 
  
    addEmployee() {
      this.employee.push(this.model);
      this.model = {};
    }
    
}