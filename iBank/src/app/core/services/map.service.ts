import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../../../environments/environment";
@Injectable({
providedIn: 'root'
})
export class MapService {
map: mapboxgl.Map;
style = 'mapbox://styles/mapbox/streets-v11';
lat =  47.9173952;
lng = 106.9202882;
zoom = 15;


constructor() {
  mapboxgl.accessToken = environment.mapbox.accessToken;
}
buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: this.zoom,
    center: [this.lng, this.lat]
  })
 this.map.addControl(new mapboxgl.NavigationControl());
}

}
