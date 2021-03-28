import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService, PokeShareInfoService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPokeId: string ='';
  searchPokeName: string='';
  pokes : Pokemon[] = [];
  pokeDetail : any;
  constructor(private pokeService: PokeAPIServiceService,
   private PokeShareInfoService: PokeShareInfoService) { 
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e:any, index:any) => {
        this.pokes.push(new Pokemon(index, e.name, e.url));
      });
    }
  );
  }

  go() {
    if (this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
      this.PokeShareInfoService.setValue(this.selectedPokeId);
    }
  }
}
