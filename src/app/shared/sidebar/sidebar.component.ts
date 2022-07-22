import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsServiceService) {}
  search(event: string) {
    console.log(event);
    this.gifsService.buscarGifHistoria(event);
  }
}
