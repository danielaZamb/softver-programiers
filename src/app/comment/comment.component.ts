import { Component, OnInit } from '@angular/core';
import { CommentServices } from '../comment.services';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  //arreglo vacio
  comments: Comment[] = [];

  constructor(private commentServices: CommentServices) { }

  ngOnInit(): void {
    this.comments = this.commentServices.comments; //este es un paso por referencia para inicializar el arreglo
  } 

}
