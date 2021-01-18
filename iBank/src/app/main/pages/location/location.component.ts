import { Component, OnInit } from '@angular/core';


export interface loc {
  lng: number;
  lat: number;
}

// export const Coord: loc[] = [
//   { lat: 47.923813, lng: 106.919983 },
//   { lat: 47.92228114834655, lng: 106.91838883309285 },
//   { lat: 47.922287, lng: 106.920552 },
//   { lat: 47.922369, lng: 106.910669 }

// ];

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}

