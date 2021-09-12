import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character-service.service';
import { Character } from 'src/app/Types/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  characters: Character[] = [];
  //characterService!: CharacterService;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.GetCharacters();
  }

  GetCharacters() {
    this.characterService.getAll().subscribe(response => {
      this.characters = response;
        console.log(this.characters);
      },
       error => {
         console.log(error);
      }
    )
  }
}
