import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { MeService } from '../_services/me.service';
import { parse } from 'querystring';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {


    arrayColors = [];


    user: User;

    constructor(
        private http:       HttpClient,
        public  router:     Router,
        private MeService:  MeService
    ) { }


    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("profile"));
    }


}

