import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})


export class CommentsComponentComponent implements OnInit {
  
  constructor() { }
  
  m_lastUsername:string;
  m_lastDescription:string;

  m_comments = 
  [
    {name:"JohnMcClane covid21 closebeta", date:"11/11/2020 08:42",text:"tampoco penseis que es lo que dicen, nadie más ha podido hacer una prueba real en pacientes con esa vacuna, luego puede ser que sea un truño"},
    {name:"Andavirus", date:"11/11/2020 01:28",text:"La vacuna es viagra molida. No le digas a nadie."},
    {name:"LocoDelColaCao", date:"10/11/2020 22:14",text:"no mientas, no se ha acabado. Se ha acabado el currar en gayumbos sin que te despidan que es distinto"},
    {name:"Bruce Lee ", date:"10/11/2020 21:37",text:"He salido tan poco de casa que no he necesitado darle la vuelta a los calzoncillos que empecé a utilizar en marzo."},
  ];

  onFormSubmit():void
  {
    let l_result = 
    {
      name: this.m_lastUsername,
      date: formatDate(new Date(), 'yyyy/MM/dd HH:mm', 'en'),
      text: this.m_lastDescription
    }

    this.m_comments.push(l_result);
  }

  ngOnInit(): void 
  {  
  }

}
