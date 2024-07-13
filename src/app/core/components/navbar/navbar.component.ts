import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToolbarModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
