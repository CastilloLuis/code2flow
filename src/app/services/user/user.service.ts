import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
    this.fillUser();
    console.log('FILL USER', this.user);
  }

  public fillUser = () => {
    this.user = {
      name: 'Luis Castillo',
      nick: 'lcastillo',
      uid: `${new Date().getTime()}`,
      email: 'lcastillo@castilloluis.me',
      premium: false,
      avatar: 'guy.png'
    }
  }

  public getUser = () => this.user;

}
