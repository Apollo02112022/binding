import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    hide : true,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  hideAge(){
    this.user.hide = !this.user.hide;
  }
}
