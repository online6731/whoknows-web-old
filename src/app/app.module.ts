import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {InterestsComponent} from './interests/interests.component';




const appRoutes: Routes = [
    //{ path: '/',             component: SignupComponent,       canActivate: [] },
    { path: 'login',              component: LoginComponent,        canActivate: [] },
    { path: 'signup',             component: SignupComponent,       canActivate: [] },
    { path: 'interests',             component: InterestsComponent,       canActivate: [] },
    { path: 'main',             component: MainComponent,       canActivate: [] }

];



import { MatButtonModule,
		 MatInputModule,
		 MatCheckboxModule,
		 MatFormFieldModule,
		 MatAutocompleteModule,
 		 MatBadgeModule,
 		 MatBottomSheetModule,
 		 MatButtonToggleModule,
		 MatCardModule,
		 MatChipsModule,
		 MatDatepickerModule,
		 MatDialogModule,
		 MatDividerModule,
		 MatExpansionModule,
		 MatGridListModule,
		 MatIconModule,
		 MatListModule,
		 MatMenuModule,
		 MatNativeDateModule,
		 MatPaginatorModule,
		 MatProgressBarModule,
		 MatProgressSpinnerModule,
		 MatRadioModule,
		 MatRippleModule,
		 MatSelectModule,
		 MatSidenavModule,
		 MatSliderModule,
		 MatSlideToggleModule,
		 MatSnackBarModule,
		 MatSortModule,
		 MatStepperModule,
		 MatTableModule,
		 MatTabsModule,
		 MatToolbarModule,
		 MatTooltipModule,
		 MatTreeModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    InterestsComponent,
    MainComponent,
  ],
  imports: [
	RouterModule.forRoot(appRoutes, { enableTracing: true } /* <-- debugging purposes only */ ),
    BrowserModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatCheckboxModule,
	A11yModule,
	CdkStepperModule,
	HttpClientModule,
    CdkTableModule,
    FormsModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
  ]
})
export class AppModule { }
