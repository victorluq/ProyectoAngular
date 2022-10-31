import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showBtn: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleShowBtn():void {
    console.log('toggleshow btn');
    this.showBtn = !this.showBtn;
    this.subject.next(this.showBtn);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
    
  }

}
