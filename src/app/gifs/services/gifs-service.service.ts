import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  private _apiKey = 'A4PmOMjUf8ljnQweISoGBz47Z5ZBIsCT';
  private _historial: string[] = [];

  public results: any[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifHistoria(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=A4PmOMjUf8ljnQweISoGBz47Z5ZBIsCT&q=${query}&limit=5`
      )
      .subscribe((reps: any) => {
        this.results = reps.data;
        console.log(reps.data);
      });
  }
}
