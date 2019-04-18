import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ITodo} from '../interfaces';
import {WalletService} from '../service/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodo[]> {
  constructor(private walletService: WalletService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.walletService.getByUserId(1)
    //   .pipe(tap(wallet => wallet));
  }
}
