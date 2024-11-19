import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor (private MenuService: MenuService) { }

  menuStatus: string = 'closed';

   menuItems?: Array<Menu>;

  ngOnInit() {
    const menu = this.MenuService.getItems();

    this.menuItems = menu;
  }

  menuClick() {
    //mecanismo de abrir e fechar!
    this.menuStatus = (this.menuStatus == 'open') ? 'closed' : 'open';

  }

}
