import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // eslint-disable-next-line max-len
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2ZThkODlmMC01OGEyLTAxMzYtZTY0Ni02OWE2NjRkZjcwOGQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI5NzEwMzQwLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctZ2FtZXJzIn0.CzSYqNGZn6cdTxoquEkmptSAh07t9QV0wIIdNSADTYQ';

  httpOptions = {
    headers: new HttpHeaders({ accept: 'application/json', authorization: this.token })
  };

  constructor(private httpClient: HttpClient) {

  }

  getUserID(usr: string, sv: string): Promise<any> {
    const URL = 'https://api.pubg.com/shards/' + sv + '/players?filter[playerNames]=' + usr;
    return this.httpClient.get(URL, this.httpOptions).toPromise();
  }

  getLifeTimeStats(id: string): Promise<any> {
    const URL = 'https://api.pubg.com/shards/steam/players/' + id + '/seasons/lifetime';
    return this.httpClient.get(URL, this.httpOptions).toPromise();
  }

  getAllSeasons(sv: string): Promise<any> {
    const URL = 'https://api.pubg.com/shards/' + sv + '/seasons';
    return this.httpClient.get(URL, this.httpOptions).toPromise();
  }

  getData(userId, sv, season: string): Promise<any> {
    const URL = 'https://api.pubg.com/shards/' + sv +
      '/players/' + userId + '/seasons/' + season;
    return this.httpClient.get(URL, this.httpOptions).toPromise();
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
