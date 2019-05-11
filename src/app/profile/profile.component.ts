import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { MeService } from '../_services/me.service';
import { parse } from 'querystring';
import { readElementValue } from '@angular/core/src/render3/util';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {


    arrayColors = [];

    user: User;
    showEditPicture: Boolean = false;
    problem:  String	= "";
    selectedPic = null;
    picture: String | ArrayBuffer;

    constructor(
        private http:       HttpClient,
        public  router:     Router,
        private MeService:  MeService
    ) { }


    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("profile"));
    }

    editPicture(){
      this.showEditPicture = true;
    }

    selectPic(event){
    	this.selectedPic = event.target.files[0];
    	var myReader :FileReader = new FileReader();
     	myReader.onloadend = (e) =>{
      	this.picture = myReader.result;
     	}
    }



    confirmPic(): void {
      if(this.picture){
        this.MeService.editProfile(this.user.picture).subscribe(body => {
          console.log(body);
          if (body.ok){
            this.showEditPicture = false;
          }
          else {
            this.showEditPicture = true;
            this.problem = "there is a problem";
          }

        });
      }
      else this.problem = "there is a problem";
    }

}

