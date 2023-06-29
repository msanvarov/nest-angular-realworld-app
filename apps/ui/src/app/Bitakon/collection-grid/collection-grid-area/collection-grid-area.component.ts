import { Component, OnInit } from '@angular/core';
import { CollectionDataService } from '../../services/collection/collection-data.service';

@Component({
  selector: 'app-collection-grid-area',
  templateUrl: './collection-grid-area.component.html',
  styleUrls: ['./collection-grid-area.component.scss']
})
export class CollectionGridAreaComponent implements OnInit {

  collectionData : any;

  constructor(private collectionItems:CollectionDataService) {
    this.collectionData = collectionItems.collectionData()
   }

  ngOnInit(): void {
  }

}
