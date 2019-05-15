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

    editImageSrc : string = "assets/images/man 2.png";
    user: User;
    showEditPicture: Boolean = false;
    problem:  String	= "";
    selectedPic : File = null;
    picture: String;

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
    	let myReader :FileReader = new FileReader();
     	myReader.onloadend = () =>{
        this.picture = myReader.result.toString();

       }
       myReader.readAsDataURL(this.selectedPic);



    }



    confirmPic(): void {
      this.user.picture = this.picture;
      if(this.picture){
        this.MeService.editProfile({ picture: this.user.picture}).subscribe(body => {
          if (body.ok){
            this.editImageSrc = this.user.picture.toString();
            setTimeout(() => {this.showEditPicture = false;}, 2000);
          }
          else {
            this.showEditPicture = true;
            this.problem = "there is a problem - server";
          }

        });
      }
      else {
        this.editImageSrc = "assets/images/man 2.png";
        this.user.picture = this.picture;
        this.MeService.editProfile({ picture: this.user.picture}).subscribe(body => {
        if (body.ok){
          this.problem = "picture removed";
          setTimeout(() => {this.showEditPicture = false;}, 3000);
        }
        else {
          this.showEditPicture = true;
          this.problem = "there is a problem - server";
        }
      });
    }this.problem = "";
}

    removePic(){
      this.picture = "";
    }

}

