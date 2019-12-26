import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ApiUrl: string = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  constructor(public http: HttpClient) { }

  Get_Details() {
    return this.http.get(this.ApiUrl);
  }
}
