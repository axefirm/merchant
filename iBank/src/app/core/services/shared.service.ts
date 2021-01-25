import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SharedService {
  @Output() onMainEvent = new EventEmitter<number>();
}