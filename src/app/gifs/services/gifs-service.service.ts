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
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
  }
}
