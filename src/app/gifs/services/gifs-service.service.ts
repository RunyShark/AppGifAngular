import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/interfaces.gisf';
@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historia')!) || [];
    this.results = JSON.parse(localStorage.getItem('card')!) || [];
  }

  buscarGifHistoria(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historia', JSON.stringify(this._historial));
    }

    this.http
      .get<SearchGifsResponse>(
        `http://api.giphy.com/v1/gifs/search?api_key=A4PmOMjUf8ljnQweISoGBz47Z5ZBIsCT&q=${query}&limit=5`
      )
      .subscribe((reps) => {
        this.results = reps.data;
        localStorage.setItem('card', JSON.stringify(reps.data));
      });
  }
}
