import { Component, OnInit } from '@angular/core';
import {PartnerService} from '../../services/partner.service';
import {Partner} from '../../model/partner';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-partner-list',
  templateUrl: 'partner-list.component.html',
  styleUrls: ['partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {

  public listPartner: Observable<Partner[]>;

  constructor(private servicePartner: PartnerService) {}

  ngOnInit() {
    this.listPartner = this.servicePartner.getListPartner();
  }
}
