import { Component, OnInit } from '@angular/core';
import { Costumerproduct } from 'src/models/classcostumerproduct';
import { CostumerpageService } from './costumerpage.service';

@Component({
  selector: 'app-costumerpage',
  templateUrl: './costumerpage.component.html',
  styleUrls: ['./costumerpage.component.css']
})
export class CostumerpageComponent implements OnInit {
   products:Costumerproduct[] | undefined
  constructor(private costumerpageservice:CostumerpageService) { }


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
   delete(productid:number|undefined){
     if(productid){
       this.costumerpageservice.deletecostumerproduct(productid).subscribe(x=>{
      if (x==true && this.products){
    var productsafterdeletet = this.products.filter(x => x.id != productid);
    this.products=productsafterdeletet

    }

   })
     }
    
   }
  

}
