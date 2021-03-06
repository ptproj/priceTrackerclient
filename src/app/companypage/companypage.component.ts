import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Companyproduct } from 'src/models/classcompanyproduct';
import { CompanypageService } from './companypage.service';
import { PrimeNGConfig } from "primeng/api";
import { ActivationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-companypage',
  templateUrl: './companypage.component.html',
  styleUrls: ['./companypage.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  providers: [MessageService, ConfirmationService]
})
export class CompanypageComponent implements OnInit {
  id_product?: number
  products: Companyproduct[] | undefined
  companyproduct?: Companyproduct
  add_update: boolean = false
  itemtodelete?: number
  haspackage: boolean = false
  submitted: boolean = false
  productDialog: boolean = false
  packageid: number = 0
  buypackagebool: boolean = false
  uploadedFile: any;
  selectedFile: any;

  addproductForm: FormGroup = new FormGroup({
    "link": new FormControl("", [Validators.required]),
    "desc": new FormControl("", [Validators.required]),
    "name": new FormControl("", [Validators.required]),
    "price": new FormControl("", [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    "active": new FormControl("", [Validators.required]),


  })
  imagePath: any;
  constructor(private messageService: MessageService,private cd:ChangeDetectorRef,private sanitizer: DomSanitizer, private companypageservice: CompanypageService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.packageid = Number(sessionStorage.getItem('haspackage'))

    this.companypageservice.getcompanyproduct().subscribe(data=>{

    this.products=data;
    this.companypageservice.products=data;


    })
    this.primengConfig.ripple = true;

  }



  addproduct() {
    this.addproductForm.controls["price"].setValue("")
    this.addproductForm.controls["name"].setValue("")
    this.addproductForm.controls["desc"].setValue("")
    this.addproductForm.controls["active"].setValue(true)
    this.addproductForm.controls["link"].setValue("")
  }

  add() {
    debugger;
    this.submitted = true;
    const id = Number(sessionStorage.getItem('companyid'))
    const x = this.addproductForm.get("link")?.value
    if (!(this.addproductForm.invalid)) {
      if (id) {
        this.companyproduct = new Companyproduct(id,
          this.addproductForm.get("price")?.value, this.addproductForm.get("name")?.value, this.addproductForm.get("desc")?.value,
          this.addproductForm.get("active")?.value, this.addproductForm.get("link")?.value)
        debugger;
        this.companypageservice.savecompanyimage(this.uploadedFile).subscribe(data => {
          if (data)
            if (this.companyproduct) {
              debugger
              this.companyproduct.image = this.uploadedFile.name;
              this.companypageservice.addcompanyproduct(this.companyproduct).subscribe(data => {
                if (this.companyproduct) {
                  this.products?.push(data)

                  this.hideDialog()
                  this.addproduct()
                  this.add_update = false;
                  this.cd.detectChanges();
                  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'youre prudoct was added succefuly' });
                }
              }
              )
            }
        }
        )
      }
    }
  }



  edit(product: Companyproduct | undefined) {

    this.add_update = true;
    if (product) {
      this.addproductForm.controls["price"].setValue(product.price)
      this.addproductForm.controls["name"].setValue(product.name)
      this.addproductForm.controls["desc"].setValue(product.description)
      this.addproductForm.controls["active"].setValue(product.active)
      this.addproductForm.controls["link"].setValue(product.productlink)
    }
    this.id_product = product?.id
    this.openNew(0)
  }

  update() {
    const id = Number(sessionStorage.getItem('companyid'))

    if (id) {
      this.companyproduct = new Companyproduct(id,
        this.addproductForm.get("price")?.value, this.addproductForm.get("name")?.value, this.addproductForm.get("desc")?.value,
        this.addproductForm.get("active")?.value, this.addproductForm.get("link")?.value)
      this.companyproduct.id = this.id_product
      this.companypageservice.updatecompanyproduct(this.companyproduct).subscribe(data => {
        if (this.products) {
          var productsafterdeletet = this.products.filter(x => x.id != this.id_product);
          this.products = productsafterdeletet
        }
        this.products?.push(data);
        this.cd.detectChanges();

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'youre prudoct was updated succefuly' });
      })
    } this.hideDialog()
    this.add_update = false
  }



  openNew(isnew: Number) {
    if (isnew) {
      this.add_update = false;
      this.addproductForm.controls["price"].setValue("")
      this.addproductForm.controls["name"].setValue("")
      this.addproductForm.controls["desc"].setValue("")
      this.addproductForm.controls["active"].setValue(true)
      this.addproductForm.controls["link"].setValue("")
    }
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  deleteSelectedProducts(productid: number | undefined) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (productid) {
          this.companypageservice.deletecompanyproduct(productid).subscribe(data => {
            if (data == true && this.products) {
              var productsafterdeletet = this.products.filter(x => x.id != this.itemtodelete);
              this.products = productsafterdeletet
              this.cd.detectChanges();

            }
          })
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        }
      }

    });
  }

 
  getactive(product: Companyproduct | undefined) {
    if (product?.active)
      return "Active";
    else return "Not active"

  }

  buypackage() {
    this.buypackagebool = true
  }

 
  onUploadHandler(event: any) {
    debugger;
    for (let file of event.files) {
      debugger;
      this.uploadedFile = file;
    }
    debugger
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });

  }
  payment(packageid: number) {
    this.packageid = packageid
    this.buypackagebool = false
  }

}
