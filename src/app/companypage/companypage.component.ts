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
  add_update:boolean=true
  addproductForm:FormGroup=new FormGroup({
    "link":new FormControl("",[Validators.required]),
    "desc":new FormControl("",[Validators.required]),
    "name":new FormControl("",[Validators.required]),
    "price":new FormControl("",[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
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
  update(){
    const id=Number(sessionStorage.getItem('companyid'))
    const x=this.addproductForm.get("link")?.value
    
    if(id){
      alert(x)
      this.companyproduct=new Companyproduct(id,
        this.addproductForm.get("price")?.value,this.addproductForm.get("name")?.value,this.addproductForm.get("desc")?.value,
        this.addproductForm.get("active")?.value,this. addproductForm.get("link")?.value,this.addproductForm.get("img")?.value )
    this.companypageservice.update(this.companyproduct);

    }
    this.close()
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

}
