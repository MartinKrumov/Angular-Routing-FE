import {Component, OnInit} from '@angular/core';
import {WalletResponseModel} from '../interfaces';
import {WalletService} from '../service/wallet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletDTOs: WalletResponseModel[] = [];

  constructor(private activated: ActivatedRoute, private walletService: WalletService) {
  }

  ngOnInit() {
    this.walletService.getByUserId(1)
      .subscribe(wallets => this.walletDTOs = wallets);
  }

}
