import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiceActorsService {

  path = 'https://api.sandbox.voice123.com/providers/search/?service=voice_over';

  constructor(private http: HttpClient) { }

  getAllVoiceActors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.path}`);
  }

  getVoiceActorsByKeyWords(keywords: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.path}&keywords=${keywords}`);
  }
}
