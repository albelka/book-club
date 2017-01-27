import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }
    memberId: string;
    memberToDisplay;

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {
      this.memberId = urlParameters['id'];
    });
    this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }

}
