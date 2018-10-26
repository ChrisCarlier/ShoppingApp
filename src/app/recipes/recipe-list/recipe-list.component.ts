import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Test recipe','This is a test','https://image.afcdn.com/recipe/20130909/1182_w420h344c1cx1424cy2136.jpg'),
    new Recipe('Test recipe','This is a test','https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/creme-brulee-facile-2894406/52734072-1-fre-FR/Creme-brulee-facile.jpeg'),
    new Recipe('Test recipe','This is a test','https://3.bp.blogspot.com/-8XJbBFbqeBc/V__lvyGyHxI/AAAAAAAAQ14/tRaXza1T6z0PhBQ97axByNFYrDZtuOR6QCLcB/s1600/recette-puits-damour.jpg')

  ];  

  constructor() { }

  ngOnInit() {
  }

}
