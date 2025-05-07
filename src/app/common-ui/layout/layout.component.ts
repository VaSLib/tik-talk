import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ProfileService} from '../../data/services/profile.service';
import {Component, inject} from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  profileService = inject(ProfileService)

  ngOnInit() {
    console.log('LayoutComponent');
    this.profileService.getMe().subscribe( value => {
      console.log(value)
    })
  }
}
