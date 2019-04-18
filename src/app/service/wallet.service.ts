import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WalletResponseModel} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) {
  }

  getByUserId(userId: number) {
    return this.http.get<WalletResponseModel[]>(`http://localhost:8090/api/users/${userId}/wallets`);
  }

}
