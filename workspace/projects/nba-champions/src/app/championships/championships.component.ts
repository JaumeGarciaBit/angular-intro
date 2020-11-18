import { Component, OnInit } from '@angular/core';
import { ChampionshipClass } from '../shared/championship-class';


@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.scss']
})
export class ChampionshipsComponent implements OnInit {

  championships = [];

  constructor()
  {
    //Create 4 championships
    this.championships.push(new ChampionshipClass(
      "1946–47",
      "Philadelphia Warriors",
      "https://billypenn.com/wp-content/uploads/2015/06/warriors_grande-Copy-300x300.jpg",
      "https://en.wikipedia.org/wiki/1946%E2%80%9347_Philadelphia_Warriors_season",
      ["Dallmar, Howie","Fleishman, Jerry","Fulks, Joe","Guokas, Matt","	Hillhouse, Art","Kaplowitz, Ralph","Musi, Angelo","Rosenberg, Petey","Rullo, Jerry","Senesky, George"]));

      this.championships.push(new ChampionshipClass(
        "1971–72",
        "Los Angeles Lakers",
        "https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Flos-angeles-lakers_416x416.jpg",
        "https://en.wikipedia.org/wiki/1971%E2%80%9372_Los_Angeles_Lakers_season",
        ["Baylor, Elgin","Chamberlain, Wilt","Cleamons, Jim","Ellis, Leroy","Erickson, Keith","Goodrich, Gail","Hairston, Happy","McMillian, Jim","Riley, Pat","Robinson, Flynn"]
      ));

      this.championships.push(new ChampionshipClass(
        "2002–03",
        "San Antonio Spurs",
        "https://images6.alphacoders.com/108/1081285.png",
        "https://en.wikipedia.org/wiki/2002%E2%80%9303_San_Antonio_Spurs_season",
        ["Bateer, Mengke","Bowen, Bruce","Claxton, Speedy","Duncan, Tim","Ferry, Danny","Ginóbili, Manu","Jackson, Stephen","Kerr, Steve","Parker, Tony","Robinson, David"]
      ));

      this.championships.push(new ChampionshipClass(
        "2018–19",
        "Toronto Raptors",
        "https://dam-img.rfdcontent.com/camo/83a38cc1725ee10d005947b88ab902bc92a560d0/687474703a2f2f696d67322e77696b69612e6e6f636f6f6b69652e6e65742f5f5f636232303134313233303233353635392f6c6f676f70656469612f696d616765732f632f63632f546f726f6e746f5f526170746f72735f4e65775f4c6f676f5f323031352e6a7067",
        "https://en.wikipedia.org/wiki/2018%E2%80%9319_Toronto_Raptors_season",
        ["Anunoby, OG","Boucher, Chris","Gasol, Marc","Green, Danny","Ibaka, Serge","Leonard, Kawhi","Lin, Jeremy","Lowry, Kyle","Loyd, Jordan","McCaw, Patrick"]
      ));

      console.log(this.championships);
    }

  ngOnInit(): void {
  }

}
