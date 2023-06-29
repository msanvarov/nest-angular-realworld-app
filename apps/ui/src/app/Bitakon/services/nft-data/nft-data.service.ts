import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NftDataService {
  constructor() {}

  trendingsData() {
    return [
      {
        id: 1,
        iconHeart: '14.2k',
        img: 'assets/img/bid/bid-img-17.jpg',
        title: 'Meta Wolves Club',
        stock: '10',
        bidHeigest: '0.074 ETH',
        heart:'24'
      },
      {
        id: 2,
        iconHeart: '11.5k',
        img: 'assets/img/bid/bid-img-18.jpg',
        title: 'Brave Tigers NFT',
        stock: '1',
        bidHeigest: '0.001 ETH',
        heart:'18'
      },
      {
        id: 3,
        iconHeart: '4.1k',
        img: 'assets/img/bid/bid-img-7.jpg',
        title: 'Beach Moon Escape',
        stock: '12',
        bidHeigest: '2.034 ETH',
        heart:'24'
      },
      {
        id: 4,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-19.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
        heart:'10'
      },
      {
        id: 5,
        iconHeart: '8.3k',
        img: 'assets/img/bid/bid-img-20.jpg',
        title: 'Chickolatev2',
        stock: '4',
        bidHeigest: '0.84 ETH',
        heart:'12'
      },
      {
        id: 6,
        iconHeart: '5.8k',
        img: 'assets/img/bid/bid-img-6.jpg',
        title: 'Based Mafia',
        stock: '4',
        bidHeigest: '0.074 ETH',
        heart:'20'
      },
      {
        id: 7,
        iconHeart: '6.4k',
        img: 'assets/img/bid/bid-img-11.jpg',
        title: 'New Year Evangelist',
        stock: '18',
        bidHeigest: '0.074 ETH',
        heart:'54'
      },
      {
        id: 8,
        iconHeart: '9.3k',
        img: 'assets/img/bid/bid-img-12.jpg',
        title: 'Prime Ape Planet',
        stock: '5',
        bidHeigest: '0.074 ETH',
        heart:'35'
      },
    ];
  }

  artData() {
    return [
      {
        id: 1,
        iconHeart: '8.3k',
        img: 'assets/img/bid/bid-img-9.jpg',
        title: 'Chickolatev2',
        stock: '4',
        bidHeigest: '0.84 ETH',
        heart:'20'
      },
      {
        id: 2,
        iconHeart: '5.8k',
        img: 'assets/img/bid/bid-img-10.jpg',
        title: 'Based Mafia',
        stock: '6',
        bidHeigest: '0.074 ETH',
        heart:'54'
      },
      {
        id: 3,
        iconHeart: '6.4k',
        img: 'assets/img/bid/bid-img-11.jpg',
        title: 'New Year Evangelist',
        stock: '3',
        bidHeigest: '0.074 ETH',
        heart:'35'
      },
      {
        id: 4,
        iconHeart: '9.3k',
        img: 'assets/img/bid/bid-img-12.jpg',
        title: 'Prime Ape Planet',
        stock: '5',
        bidHeigest: '0.078 ETH',
        heart:'48'
      },
      {
        id: 5,
        iconHeart: '14.2k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '10',
        bidHeigest: '0.085 ETH',
        heart:'45'
      },
      {
        id: 6,
        iconHeart: '11.5k',
        img: 'assets/img/bid/bid-img-6.jpg',
        title: 'Brave Tigers NFT',
        stock: '4',
        bidHeigest: '0.058 ETH',
        heart:'25'
      },
      {
        id: 7,
        iconHeart: '4.1k',
        img: 'assets/img/bid/bid-img-7.jpg',
        title: 'Beach Moon Escape',
        stock: '9',
        bidHeigest: '0.068 ETH',
        heart:'24'
      },
      {
        id: 8,
        iconHeart: '8.1k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '7',
        bidHeigest: '0.065 ETH',
        heart:'10'
      },
    ];
  }

  musicData() {
    return [
      {
        id: 1,
        iconHeart: '6.4k',
        img: 'assets/img/bid/bid-img-11.jpg',
        title: 'New Year Evangelist',
        stock: '3',
        bidHeigest: '0.074 ETH',
      },
      {
        id: 2,
        iconHeart: '9.3k',
        img: 'assets/img/bid/bid-img-12.jpg',
        title: 'Prime Ape Planet',
        stock: '5',
        bidHeigest: '0.078 ETH',
      },
      {
        id: 3,
        iconHeart: '14.2k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '10',
        bidHeigest: '0.085 ETH',
      },
      {
        id: 4,
        iconHeart: '11.5k',
        img: 'assets/img/bid/bid-img-6.jpg',
        title: 'Brave Tigers NFT',
        stock: '4',
        bidHeigest: '0.058 ETH',
      },
      {
        id: 5,
        iconHeart: '4.1k',
        img: 'assets/img/bid/bid-img-7.jpg',
        title: 'Beach Moon Escape',
        stock: '9',
        bidHeigest: '0.068 ETH',
      },
      {
        id: 6,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
      {
        id: 7,
        iconHeart: '8.3k',
        img: 'assets/img/bid/bid-img-9.jpg',
        title: 'Chickolatev2',
        stock: '4',
        bidHeigest: '0.84 ETH',
      },
      {
        id: 8,
        iconHeart: '5.8k',
        img: 'assets/img/bid/bid-img-10.jpg',
        title: 'Based Mafia',
        stock: '6',
        bidHeigest: '0.074 ETH',
      },
    ];
  }


  videoData() {
    return [
      {
        id: 1,
        iconHeart: '4.1k',
        img: 'assets/img/bid/bid-img-7.jpg',
        title: 'Beach Moon Escape',
        stock: '9',
        bidHeigest: '0.068 ETH',
      },
      {
        id: 2,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
      {
        id: 3,
        iconHeart: '8.3k',
        img: 'assets/img/bid/bid-img-9.jpg',
        title: 'Chickolatev2',
        stock: '4',
        bidHeigest: '0.84 ETH',
      },
      {
        id: 4,
        iconHeart: '5.8k',
        img: 'assets/img/bid/bid-img-10.jpg',
        title: 'Based Mafia',
        stock: '6',
        bidHeigest: '0.074 ETH',
      },
      {
        id: 5,
        iconHeart: '6.4k',
        img: 'assets/img/bid/bid-img-11.jpg',
        title: 'New Year Evangelist',
        stock: '3',
        bidHeigest: '0.074 ETH',
      },
      {
        id: 6,
        iconHeart: '9.3k',
        img: 'assets/img/bid/bid-img-12.jpg',
        title: 'Prime Ape Planet',
        stock: '5',
        bidHeigest: '0.078 ETH',
      },
      {
        id: 7,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
      {
        id: 8,
        iconHeart: '11.5k',
        img: 'assets/img/bid/bid-img-6.jpg',
        title: 'Brave Tigers NFT',
        stock: '4',
        bidHeigest: '0.058 ETH',
      },
    ];
  }

  sportsData() {
    return [
      {
        id: 1,
        iconHeart: '8.3k',
        img: 'assets/img/bid/bid-img-9.jpg',
        title: 'Chickolatev2',
        stock: '4',
        bidHeigest: '0.84 ETH',
      },
      {
        id: 2,
        iconHeart: '5.8k',
        img: 'assets/img/bid/bid-img-10.jpg',
        title: 'Based Mafia',
        stock: '6',
        bidHeigest: '0.074 ETH',
      },
      {
        id: 3,
        iconHeart: '6.4k',
        img: 'assets/img/bid/bid-img-11.jpg',
        title: 'New Year Evangelist',
        stock: '3',
        bidHeigest: '0.074 ETH',
      },
      {
        id: 4,
        iconHeart: '9.3k',
        img: 'assets/img/bid/bid-img-12.jpg',
        title: 'Prime Ape Planet',
        stock: '5',
        bidHeigest: '0.078 ETH',
      },
      {
        id: 5,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
      {
        id: 6,
        iconHeart: '11.5k',
        img: 'assets/img/bid/bid-img-6.jpg',
        title: 'Brave Tigers NFT',
        stock: '4',
        bidHeigest: '0.058 ETH',
      },
      {
        id: 7,
        iconHeart: '4.1k',
        img: 'assets/img/bid/bid-img-7.jpg',
        title: 'Beach Moon Escape',
        stock: '9',
        bidHeigest: '0.068 ETH',
      },
      {
        id: 8,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
    ];
  }

  photographyData() {
    return [
      {
        id: 1,
        iconHeart: '5.8k',
        img: 'assets/img/bid/bid-img-10.jpg',
        title: 'Based Mafia',
        stock: '6',
        bidHeigest: '0.074 ETH',
      },
      {
        id: 2,
        iconHeart: '6.4k',
        img: 'assets/img/bid/bid-img-11.jpg',
        title: 'New Year Evangelist',
        stock: '3',
        bidHeigest: '0.074 ETH',
      },
      {
        id: 3,
        iconHeart: '9.3k',
        img: 'assets/img/bid/bid-img-12.jpg',
        title: 'Prime Ape Planet',
        stock: '5',
        bidHeigest: '0.078 ETH',
      },
      {
        id: 4,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
    ];
  }

  gameData() {
    return [
      {
        id: 1,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
      {
        id: 2,
        iconHeart: '11.5k',
        img: 'assets/img/bid/bid-img-6.jpg',
        title: 'Brave Tigers NFT',
        stock: '4',
        bidHeigest: '0.058 ETH',
      },
      {
        id: 3,
        iconHeart: '4.1k',
        img: 'assets/img/bid/bid-img-7.jpg',
        title: 'Beach Moon Escape',
        stock: '9',
        bidHeigest: '0.068 ETH',
      },
      {
        id: 4,
        iconHeart: '7.3k',
        img: 'assets/img/bid/bid-img-5.jpg',
        title: 'Meta Wolves Club',
        stock: '14',
        bidHeigest: '3.034 ETH',
      },
    ];
  }

  shopData () {
    return [
      {
        id: 1,
        heart: '24',
        img: 'assets/img/bid/2/bid-img-11.jpg',
        title: 'Terrestrial black hole',
        stock: '6',
        nftPriceBox: '3.54',
      },
      {
        id: 2,
        heart: '10',
        img: 'assets/img/bid/2/bid-img-15.jpg',
        title: 'Chickolatev2',
        stock: '10',
        nftPriceBox: '2.02',
      },
      {
        id: 3,
        heart: '12',
        img: 'assets/img/bid/2/bid-img-3.jpg',
        title: 'Brave Tigers NFT',
        stock: '7',
        nftPriceBox: '0.01',
      },
      {
        id: 4,
        heart: '20',
        img: 'assets/img/bid/2/bid-img-17.jpg',
        title: 'Amazing digital art',
        stock: '8',
        nftPriceBox: '1.00',
      },
      {
        id: 5,
        heart: '54',
        img: 'assets/img/bid/2/bid-img-13.jpg',
        title: 'Prime Ape Planet',
        stock: '4',
        nftPriceBox: '4.01',
      },
      {
        id: 6,
        heart: '35',
        img: 'assets/img/bid/2/bid-img-18.jpg',
        title: 'Based Mafia',
        stock: '11',
        nftPriceBox: '1.00',
      },
      {
        id: 7,
        heart: '48',
        img: 'assets/img/bid/2/bid-img-19.jpg',
        title: 'Beach Moon Escape',
        stock: '9',
        nftPriceBox: '4.02',
      },
      {
        id: 8,
        heart: '25',
        img: 'assets/img/bid/2/bid-img-10.jpg',
        title: 'New Year Evangelist',
        stock: '14',
        nftPriceBox: '2.47',
      },
      {
        id: 9,
        heart: '28',
        img: 'assets/img/bid/2/bid-img-20.jpg',
        title: 'Stargate Fossil',
        stock: '14',
        nftPriceBox: '1.47',
      },
    ]
  }
}
