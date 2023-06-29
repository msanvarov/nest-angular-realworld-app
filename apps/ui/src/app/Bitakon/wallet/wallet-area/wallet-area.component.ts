import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-area',
  templateUrl: './wallet-area.component.html',
  styleUrls: ['./wallet-area.component.scss']
})
export class WalletAreaComponent implements OnInit {

  walletData = [
    {
      firstTag:'popular',
      icon:'assets/img/icon/wallet/metamask.png',
      title:'Metamask'
    },
    {
      icon:'assets/img/icon/wallet/coinbase.png',
      title:'Coinbase Wallet',
      bg:'wallet-blue-bg'
    },
    {
      icon:'assets/img/icon/wallet/wallet.png',
      title:'Wallet Connect',
      bg:'wallet-cyan-bg'
    },
    {
      icon:'assets/img/icon/wallet/bitski.png',
      title:'Bitski',
      bg:'wallet-red-bg'
    },
    {
      icon:'assets/img/icon/wallet/formatic.png',
      title:'Fortmatic',
      bg:'wallet-purple-bg'
    },
    {
      icon:'assets/img/icon/wallet/authereum.png',
      title:'Authereum',
      bg:'wallet-orange-bg'
    },
    {
      icon:'assets/img/icon/wallet/torus.png',
      title:'Torus',
      bg:'wallet-navy-bg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
