import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/interfaces.gisf';
@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  private servicioUrl = 'http://api.giphy.com/v1/gifs';
  private apiKey = 'A4PmOMjUf8ljnQweISoGBz47Z5ZBIsCT';
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

    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((reps) => {
        this.results = reps.data;
        localStorage.setItem('card', JSON.stringify(reps.data));
      });
  }
}
