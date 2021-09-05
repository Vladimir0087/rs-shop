import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CoreService } from 'src/app/core/service/core.service';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent {
  public userName: string | null = '';

  constructor(public coreService: CoreService, public authService: AuthService) {}
}
