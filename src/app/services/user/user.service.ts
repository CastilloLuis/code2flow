import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FlowChart } from 'src/app/interfaces/flowchart';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor() {
    this.fillUser();
  }

  public fillUser = () => {
    this.user = {
      name: 'Luis Castillo',
      nick: 'lcastillo',
      uid: `${new Date().getTime()}`,
      email: 'lcastillo@castilloluis.me',
      premium: false,
      avatar: 'guy.png',
      flowCharts: [
        {title: 'Expressing Your Thoughts (Sample #1)', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png'], active: true},
        {title: 'Should | Become an Astronaut or Not? (Sample #2)', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png', 'guy.jpg'], active: true},
        {title: 'How to Play Pictionary (Sample #3)', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png'], active: true},
        {title: 'Untitled flowchart', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png'], active: false}
      ]      
    }
  }

  public getUser = () => this.user;

}
