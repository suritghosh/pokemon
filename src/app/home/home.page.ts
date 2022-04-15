import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  offset = 0;
  pokemon = [];
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  
  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }

    this.pokeService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];

      if (event) {
        event.target.complete();
      }

      if (this.offset == 800) {
        this.infinite.disabled = true;
      }
    });
  }

  onSearchChange(e) {
    let value = e.detail.value;

    if (value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }

    this.pokeService.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }

}
