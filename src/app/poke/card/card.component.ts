import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  info: any

  url: string= "";
  dato: string="";

  constructor(private pokeService: PokeService){}

  ngOnInit(): void{
    this.pokeService.getpokeData(this.info.name).subscribe((res: any) => {
    this.url = res.sprites.front_default;
    });
  }

}
