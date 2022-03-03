import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Companyproduct } from 'src/models/classcompanyproduct';
import { CompanypageService } from './companypage.service';
// import { ConfirmationService } from 'primeng/api';
// import { MessageService } from 'primeng/api';
// import { Table, TableModule } from 'primeng/table';
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
   providers: [MessageService,ConfirmationService]
})
export class CompanypageComponent implements OnInit {
  id_product?:number
  products:Companyproduct[] | undefined
  companyproduct?:Companyproduct
  add_update:boolean=true
  itemtodelete?:number
  addproductForm:FormGroup=new FormGroup({
    "link":new FormControl("",[Validators.required]),
    "desc":new FormControl("",[Validators.required]),
    "name":new FormControl("",[Validators.required]),
    "price":new FormControl("",[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    "active":new FormControl("",[Validators.required]),
    "img":new FormControl("",[Validators.required])

  })
  constructor(private companypageservice:CompanypageService,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

alert("init companypage")
this.companypageservice.getcompanyproduct().subscribe(data=>{


this.products=data
this.companypageservice.products=data


})




  }
  update(){
    const id=Number(sessionStorage.getItem('companyid'))

    if(id){
      this.companyproduct=new Companyproduct(id,
        this.addproductForm.get("price")?.value,this.addproductForm.get("name")?.value,this.addproductForm.get("desc")?.value,
        this.addproductForm.get("active")?.value,this. addproductForm.get("link")?.value,this.addproductForm.get("img")?.value )
     this.companyproduct.id=this.id_product
    this.companypageservice.updatecompanyproduct(this.companyproduct).subscribe(data=>{
      if ( this.products){
      var productsafterdeletet = this.products.filter(x => x.id != this.id_product);
   this.products=productsafterdeletet}
      this.products?.push(data);
    })

    }
    this.close()
  }
    

  
  delete(){
    if(this.itemtodelete){
      this.companypageservice.deletecompanyproduct(this.itemtodelete).subscribe(data=>{
     if (data==true && this.products){
   var productsafterdeletet = this.products.filter(x => x.id != this.itemtodelete);
   this.products=productsafterdeletet
this.close_del_div()
   }
   


  })
    }
   
  }
  close() {
    var modal = document.getElementById("myModal");
    if(modal)
     modal.style.display = "none";
     this.add_update=true
  }

  
  pop() {
    let modal = document.getElementById("myModal");
    if(modal)
      modal.style.display = "block";
  }
  addproduct(){
    this.addproductForm.controls["price"].setValue("")
      this.addproductForm.controls["name"].setValue("")
      this.addproductForm.controls["desc"].setValue("")
      this.addproductForm.controls["active"].setValue(true)
      this.addproductForm.controls["img"].setValue("")
      this.addproductForm.controls["link"].setValue("")
    this.pop()
  }

  edit(product:Companyproduct|undefined){
    
    
    this.add_update=false
    if(product){
      this.addproductForm.controls["price"].setValue(product.price)
      this.addproductForm.controls["name"].setValue(product.name)
      this.addproductForm.controls["desc"].setValue(product.description)
      this.addproductForm.controls["active"].setValue(product.active)
      this.addproductForm.controls["img"].setValue(product.image)
      this.addproductForm.controls["link"].setValue(product.productlink)
    }
    this.id_product=product?.id
    this.pop()
    }
  add(){
    const id=Number(sessionStorage.getItem('companyid'))
    const x=this.addproductForm.get("link")?.value
    
    if(id){
      alert(x)
      this.companyproduct=new Companyproduct(id,
        this.addproductForm.get("price")?.value,this.addproductForm.get("name")?.value,this.addproductForm.get("desc")?.value,
        this.addproductForm.get("active")?.value,this. addproductForm.get("link")?.value,this.addproductForm.get("img")?.value )
       
          this.companypageservice.addcompanyproduct(this.companyproduct).subscribe(
            data=>{alert(data.id);
              if(this.companyproduct){this.products?.push(data)
              this.close()} 
          })
        
        
    
    }
    
  }
  

  deletediv(productid:number|undefined){
    this.itemtodelete=productid
    let modal1 = document.getElementById("myModal1");
    if(modal1)
      modal1.style.display = "block";

  }
  close_del_div(){
    var modal = document.getElementById("myModal1");
    if(modal)
     modal.style.display = "none";
   
  }
  

}
