import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../../../product-catalog/model/product';

@Component({
  selector: 'app-showroom-item',
  templateUrl: 'showroom-item.component.html',
  styleUrls: ['showroom-item.component.scss']
})
export class ShowroomItemComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

  }
}
