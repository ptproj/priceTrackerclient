import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Companyproduct } from 'src/models/classcompanyproduct';
import { CompanypageService } from './companypage.service';

@Component({
  selector: 'app-companypage',
  templateUrl: './companypage.component.html',
  styleUrls: ['./companypage.component.css']
})
export class CompanypageComponent implements OnInit {
  products:Companyproduct[] | undefined
  companyproduct?:Companyproduct

  addproductForm:FormGroup=new FormGroup({
    "link":new FormControl("",[Validators.required]),
    "desc":new FormControl("",[Validators.required]),
    "name":new FormControl("",[Validators.required]),
    "price":new FormControl("",[Validators.required]),
    "active":new FormControl("",[Validators.required]),
    "img":new FormControl("",[Validators.required])

  })
  constructor(private companypageservice:CompanypageService) { }

  ngOnInit(): void {

alert("init companypage")
this.companypageservice.getcompanyproduct().subscribe(data=>{


this.products=data
this.companypageservice.products=data

})




  }
  delete(productid:number|undefined){
    if(productid){
      this.companypageservice.deletecompanyproduct(productid).subscribe(x=>{
     if (x==true && this.products){
   var productsafterdeletet = this.products.filter(x => x.id != productid);
   this.products=productsafterdeletet

   }
   


  })
    }
   
  }
  edit(product:Companyproduct|undefined){
   // this.addproductForm.get("price").value                    
    //,this.addproductForm.get("name")?.value,this.addproductForm.get("desc")?.value,
   // this.addproductForm.get("active")?.value,this. addproductForm.get("link")?.value,this.addproductForm.get("img")?.value )


  }
  add(){
    const id=Number(sessionStorage.getItem('companyid'))
    const x=this.addproductForm.get("link")?.value
    
    if(id){
      alert(x)
      this.companyproduct=new Companyproduct(id,
        this.addproductForm.get("price")?.value,this.addproductForm.get("name")?.value,this.addproductForm.get("desc")?.value,
        this.addproductForm.get("active")?.value,this. addproductForm.get("link")?.value,this.addproductForm.get("img")?.value )
    this.companypageservice.addcompanyproduct(this.companyproduct).subscribe(x=>{alert(x.id)})

    }
    
  }

}
