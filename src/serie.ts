export class Serie{
    id:number;
    title:string;
    channel:string;
    seasons:number;
    summary:string;
    link:string;
    img:string;

    constructor(id:number, title:string, channel:string, seasons:number, summary:string, link:string, img:string){
        this.id = id;
        this.channel = channel;
        this.img = img;
        this.title = title;
        this.seasons = seasons;
        this.summary = summary;
        this.link = link;
    }
}