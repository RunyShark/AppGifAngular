import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  private _historial: string[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifHistoria(query: string) {
    this._historial.unshift(query);
    console.log(this._historial);
  }
}
