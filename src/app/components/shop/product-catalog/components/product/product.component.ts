import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {AlertService} from '../../../../utils/error-handler/AlertService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'products',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {

  private uuid: string;
  private sub: any;
  public product: Product;
  public formProduct: FormGroup;

  constructor(private router: Router,
              private routeClicked: ActivatedRoute,
              private formBuilder: FormBuilder,
              private serviceProduct: ProductService,
              private serviceAlert: AlertService) {}

  ngOnInit() {
    this.formProduct = this.formBuilder.group({
      'number' : [null, [Validators.required, Validators.pattern('^[a-z0-9]')]],
      'name' : [null, [Validators.required]],
      'description' : [null, []],
      'price' : [null, [Validators.required]]
    });

    this.sub = this.routeClicked.params.subscribe(params => {
      this.uuid = params['uuid'];
    });
    this.serviceProduct.getProduct(this.uuid).subscribe(data => this.product = data);
  }

  actionSave() {
    this.serviceProduct
      .saveProduct(this.formProduct.value)
      .subscribe((data: Product) => this.product = data,
        error => console.log(error),
        () => this.serviceAlert.success('Product is successfully saved.', true));
  }

  actionCancel() {
    this.router.navigate(['products']);
  }
}
