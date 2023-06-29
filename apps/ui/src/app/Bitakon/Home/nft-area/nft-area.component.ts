import { Component, OnInit,Input } from '@angular/core';
import { NftDataService } from '../../services/nft-data/nft-data.service';

@Component({
  selector: 'app-nft-area',
  templateUrl: './nft-area.component.html',
  styleUrls: ['./nft-area.component.scss']
})
export class NftAreaComponent implements OnInit {

  @Input () product_tab : string | undefined;

  trendings : any;
  arts : any;
  musics : any;
  videos : any;
  sports: any;
  photographys: any;
  games: any;

  constructor(private nftItems:NftDataService) {
    this.trendings = nftItems.trendingsData();
    this.arts = nftItems.artData();
    this.musics = nftItems.musicData();
    this.videos = nftItems.videoData();
    this.sports = nftItems.sportsData();
    this.photographys = nftItems.photographyData();
    this.games = nftItems.gameData();
   }

  ngOnInit(): void {
  }

}
