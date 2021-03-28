import { Component, Input, OnInit } from '@angular/core';
import {PokeShareInfoService} from '../poke-share-info.service';
@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers: [PokeShareInfoService]
})
export class PokedetailComponent implements OnInit {

  @Input('detail')
  detail : any;
  constructor(private PokeShareInfoService: PokeShareInfoService) 
  { 
    this.PokeShareInfoService.getObservable().subscribe(e => console.log('e' + e));
  }

  ngOnInit(): void {
  }

}
