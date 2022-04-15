import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details: any;
  slideOpts =  {
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false
    // }
  };

  constructor(private route: ActivatedRoute, private pokeService: PokemonService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokeDetails(index).subscribe(details => {
      console.log('Details: ', details);
      this.details = details;
    })
  }
  getBGColor(type){
    switch(type){
      case 'grass':
        return '#7AC74C';
      case 'water':
        return '#6390F0';
      case 'fire':
        return '#EE8130';
      case 'normal':
        return '#A8A77A';
      case 'bug':
        return '#A6B91A';
      case 'dark':
        return '#705746';
      case 'dragon':
        return '#6F35FC';
      case 'electric':
        return '#F7D02C';
      case 'fairy':
        return '#D685AD';
      case 'fighting':
        return '#C22E28';
      case 'flying':
        return '#A98FF3';
      case 'ghost':
        return '#735797';
      case 'ground':
        return '#E2BF65';
      case 'ice':
        return '#96D9D6';
      case 'poison':
        return '#A33EA1';
      case 'psychic':
        return '#F95587';
      case 'rock':
        return '#B6A136';
      case 'steel':
        return '#B7B7CE';
    }
  }

  getColor(type){
    switch(type){
      case 'grass':
        return 'white';
      case 'water':
        return 'white';
      case 'fire':
        return 'white';
      case 'normal':
        return 'white';
      case 'bug':
        return 'white';
      case 'dark':
        return 'white';
      case 'dragon':
        return 'white';
      case 'electric':
        return 'white';
      case 'fairy':
        return 'white';
      case 'fighting':
        return 'white';
      case 'flying':
        return 'white';
      case 'ghost':
        return 'white';
      case 'ground':
        return 'white';
      case 'ice':
        return 'white';
      case 'poison':
        return 'white';
      case 'psychic':
        return 'white';
      case 'rock':
        return 'white';
      case 'steel':
        return 'white';
    }
  }
}
