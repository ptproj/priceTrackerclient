import { Component, OnInit } from '@angular/core';
import { Costumerproduct } from 'src/models/classcostumerproduct';
import { CostumerpageService } from './costumerpage.service';

@Component({
  selector: 'app-costumerpage',
  templateUrl: './costumerpage.component.html',
  styleUrls: ['./costumerpage.component.css']
})
export class CostumerpageComponent implements OnInit {

  constructor(private costumerpageservice:CostumerpageService) { 
    
  }
  private products:Costumerproduct[] | undefined

  ngOnInit(): void {
    this.costumerpageservice.getcostumerproduct().subscribe(data=>this.products=data);
  }
  

}
