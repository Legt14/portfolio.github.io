import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  popUpStatus = true;

  changeStatus(){
    this.popUpStatus = !this.popUpStatus;
  }
}
