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
func(){
  this.costumerpageservice.getcostumerproduct().subscribe(data=>
    {alert(data.values.length)
      this.costumerpageservice.products=data
    this.products=this.costumerpageservice.products
    alert(this.products.values.length)});
  
    

}

  ngOnInit(): void {
    alert("init costumerpage")
   this.costumerpageservice.getcostumerproduct().subscribe(data=>
    {alert(data.values.length)
      this.costumerpageservice.products=data

    this.products=data
    alert(this.products.values.length)});
    
    
   }
  

}
