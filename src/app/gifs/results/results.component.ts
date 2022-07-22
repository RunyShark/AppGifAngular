import { Component } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  get resultados() {
    return this.gifService.results;
  }
  constructor(private gifService: GifsServiceService) {}
}
