import { Component, OnInit, Input } from '@angular/core';
import { ICar, CarType } from '../../../services/interfaces';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, ROUTER_CONFIGURATION } from '@angular/router';
import { CarsDataService } from '../../../services/cars-data.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car:ICar;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private carsService: CarsDataService) { }

  ngOnInit() {
    
  }

}
