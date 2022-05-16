import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Costumerproduct } from 'src/models/classcostumerproduct';
import { CostumerpageService } from './costumerpage.service';
import {ConfirmationService,  MessageService } from 'primeng/api';
@Component({
  selector: 'app-costumerpage',
  templateUrl: './costumerpage.component.html',
  styleUrls: ['./costumerpage.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CostumerpageComponent implements OnInit {
  addproductForm:FormGroup=new FormGroup({
    "link":new FormControl("",[Validators.required])
  })
  
   products?:Costumerproduct[] 
   itemtodelete?:number
   show:boolean=false
   submitted:boolean=false
  constructor(private costumerpageservice:CostumerpageService,private primengConfig: PrimeNGConfig, private messageService: MessageService,private confirmationService: ConfirmationService) {
   
   }

 costumerproduct?:Costumerproduct
  ngOnInit(): void {
    //this.primengConfig.ripple = true;
   this.costumerpageservice.getcostumerproduct().subscribe(data=>
    {
      data=data.reverse()
      this.costumerpageservice.products=data
      this.products=data
    });
    
    
   }
 

  
  add(){
    const id=Number(sessionStorage.getItem('costumerid'))
    const x=this.addproductForm.get("link")?.value
    this.submitted=true
    if(!(this.addproductForm.invalid)){

     if(id){
      alert(x)
      this.costumerproduct=new Costumerproduct(id,this. addproductForm.get("link")?.value )
    this.costumerpageservice.addcostumerproduct(this.costumerproduct).subscribe(x=>{
      if(this.costumerproduct){
      this.products?.push(x)
      this.products?.reverse();

      this.submitted=false
      this.messageService.add({severity:'success', summary: 'Success', detail: 'youre prudoct was added succefuly'});} 
      this.addproductForm.controls["link"].setValue("")
    })
  } } }

  
  
  deletediv(productid:number|undefined){
  this.itemtodelete=productid
  this.show=true
}
// delete(){
//   if(this.itemtodelete){
//     this.costumerpageservice.deletecostumerproduct(this.itemtodelete).subscribe(x=>{
//    if (x==true && this.products){
//  var productsafterdeletet = this.products.filter(x => x.id != this.itemtodelete);
//  this.products=productsafterdeletet
//  this.show=false
// this.closedialog()
// this.messageService.add({severity:'success', summary: 'Success', detail: 'youre prudoct was deleted succefuly'});
//  }
// })
//   }
 
// }

delete(productid:number|undefined) {
  this.itemtodelete=productid
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if(this.itemtodelete){
        this.costumerpageservice.deletecostumerproduct(this.itemtodelete).subscribe(data=>{
        if (data==true && this.products){
        var productsafterdeletet = this.products.filter(x => x.id != this.itemtodelete);
        this.products=productsafterdeletet}})
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }}
   
  });
}
closedialog()
{
  this.show=false
}

}
