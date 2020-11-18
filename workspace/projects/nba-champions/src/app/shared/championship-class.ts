export class ChampionshipClass
{
  year:string;
  champion:string;
  teamLogo:string;
  championUrl:string;
  bestPlayers:Array<string>;

  constructor(year:string, champion:string, teamLogo:string, championUrl:string, bestplayers:Array<string>)
  {
    this.year=year;
    this.champion=champion;
    this.teamLogo=teamLogo;
    this.championUrl = championUrl;
    this.bestPlayers=bestplayers;
  }
}
