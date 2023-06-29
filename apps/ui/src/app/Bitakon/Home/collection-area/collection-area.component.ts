import { Component, OnInit } from '@angular/core';
import { CollectionDataService } from '../../services/collection/collection-data.service';

@Component({
  selector: 'app-collection-area',
  templateUrl: './collection-area.component.html',
  styleUrls: ['./collection-area.component.scss']
})
export class CollectionAreaComponent implements OnInit {

  collectionData : any;

  constructor(private collectionItems:CollectionDataService) {
    this.collectionData = collectionItems.collectionData()
   }

  ngOnInit(): void {
  }

}
