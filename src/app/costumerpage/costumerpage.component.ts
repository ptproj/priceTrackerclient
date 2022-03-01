import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Costumerproduct } from 'src/models/classcostumerproduct';
import { CostumerpageService } from './costumerpage.service';
import {OrderListModule} from 'primeng/orderlist';
@Component({
  selector: 'app-costumerpage',
  templateUrl: './costumerpage.component.html',
  styleUrls: ['./costumerpage.component.css']
})
export class CostumerpageComponent implements OnInit {
  addproductForm:FormGroup=new FormGroup({
    "link":new FormControl("",[Validators.required])
  })
  
   products?:Costumerproduct[] 
   itemtodelete?:number
  constructor(private costumerpageservice:CostumerpageService) {
   
   }

 costumerproduct?:Costumerproduct
  ngOnInit(): void {
    alert("init costumerpage")
   this.costumerpageservice.getcostumerproduct().subscribe(data=>
    {
      //data.forEach(x=>alert(x.baseprice))
      this.costumerpageservice.products=data
      this.products=data
     //this.products.forEach(x=>alert(x.costumerid))
    });
    
    
   }
   delete(){
     if(this.itemtodelete){
       this.costumerpageservice.deletecostumerproduct(this.itemtodelete).subscribe(x=>{
      if (x==true && this.products){
    var productsafterdeletet = this.products.filter(x => x.id != this.itemtodelete);
    this.products=productsafterdeletet
this.close()
    }


   })
     }
    
   }
  add(){
    const id=Number(sessionStorage.getItem('costumerid'))
    const x=this.addproductForm.get("link")?.value
    
    if(id){
      alert(x)
      this.costumerproduct=new Costumerproduct(id,this. addproductForm.get("link")?.value )
    this.costumerpageservice.addcostumerproduct(this.costumerproduct).subscribe(x=>{alert(x.id)
      if(this.costumerproduct){this.products?.push(x)} 
    })

    }
    
  }
  close() {
    var modal = document.getElementById("myModal");
    if(modal)
     modal.style.display = "none";
   
  }
  pop() {
    let modal = document.getElementById("myModal");
    if(modal)
      modal.style.display = "block";
  }
  deletediv(productid:number|undefined){
  this.itemtodelete=productid
  this.pop()
}
}
