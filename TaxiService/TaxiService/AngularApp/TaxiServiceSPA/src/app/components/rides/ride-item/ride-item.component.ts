import { Component, OnInit, Input } from '@angular/core';
import { IRide } from '../../../services/interfaces';

@Component({
  selector: 'app-ride-item',
  templateUrl: './ride-item.component.html',
  styleUrls: ['./ride-item.component.css']
})
export class RideItemComponent implements OnInit {

  @Input() ride:IRide;

  constructor() { }

  ngOnInit() {
  }

}
