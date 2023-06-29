import { Component, OnInit } from '@angular/core';
import { NftDataService } from '../../services/nft-data/nft-data.service';
import { CollectionDataService } from '../../services/collection/collection-data.service';


@Component({
  selector: 'app-profile-area',
  templateUrl: './profile-area.component.html',
  styleUrls: ['./profile-area.component.scss']
})
export class ProfileAreaComponent implements OnInit {

  onSalesItems : any;
  createdItems  : any;
  collections : any;
  likesData : any;

  constructor(private nftItems:NftDataService,private collectionItems:CollectionDataService) {
    this.onSalesItems = nftItems.artData();
    this.createdItems = nftItems.trendingsData();
    this.likesData = nftItems.shopData();
    this.collections = collectionItems.collectionData();
   }

  ngOnInit(): void {
  }

}
