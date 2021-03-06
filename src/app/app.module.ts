import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { MembersComponent } from './members/members.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AgePipe } from './age.pipe';
import { AdminComponent } from './admin/admin.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MembersComponent,
    MemberDetailComponent,
    AgePipe,
    AdminComponent,
    UpdateMemberComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
