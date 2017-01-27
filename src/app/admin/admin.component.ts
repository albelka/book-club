import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  submitForm(name: string, age: number, favorite: string, preference: string, suggests: string, image: string) {
    if(name != "" && suggests != "" && age != null){
      var newMember: Member = new Member(name, age, favorite, preference, suggests, image);
      this.memberService.addMember(newMember);
    }
  }
}
