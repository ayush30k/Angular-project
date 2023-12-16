import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './header/header.component';
import {MatModule} from './AppModule/MatModule';
import { ContactPopupComponent } from './component/contact-popup/contact-popup.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ResumeComponent,
    HeaderComponent,
    FooterComponent,
    ContactPopupComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
