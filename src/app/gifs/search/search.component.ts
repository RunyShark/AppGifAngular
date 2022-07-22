import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsServiceService) {}

  search() {
    const valir = this.txtSearch.nativeElement.value;

    this.gifsService.buscarGifHistoria(valir);

    this.txtSearch.nativeElement.value = '';
  }
}
