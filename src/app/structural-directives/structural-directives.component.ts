import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

cheifMinister = 'Jagan';

marks=40;

students=[
  'Ram',
  'Rahim',
  'sai',
  'shyam',
  'priya'

];
movies=[
  { title:'bahubali',year:2017,director:'Rajamouli'},
  { title:'Raajakumara',year:2018,director:'saikumar'},
  { title:'KGF',year:2019,director:'prashant'},
]

  constructor() { }

  removeMovie(movie){
    const index=this.movies.indexOf(movie);
    this.movies.splice(index,1)
  }
  ngOnInit(): void {
  }

}
