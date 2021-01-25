import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/core/services/map.service';
import * as mapboxgl from 'mapbox-gl';


export interface loc {
  lng: number;
  lat: number;
}

export const Coord: loc[] = [
  { lat: 47.923813, lng: 106.919983 },
  { lat: 47.92228114834655, lng: 106.91838883309285 },
  { lat: 47.922287, lng: 106.920552 },
  { lat: 47.922369, lng: 106.910669 }

];

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  currentMarkers:any = [];


  constructor(private map:MapService) { }

  ngOnInit() {
    this.map.buildMap();
    this.test();
  }

  test(){
    Coord.forEach(item => {
      const marker = new mapboxgl.Marker({ color: '#FE5A8C' })
          
          .setLngLat([item.lng, item.lat])
          .addTo(this.map.map)
          .togglePopup();
    
      this.currentMarkers.push(marker);
    });
    console.log(this.currentMarkers);
  
  }

}

