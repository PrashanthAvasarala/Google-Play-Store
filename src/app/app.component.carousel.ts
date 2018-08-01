import { Component, OnInit } from "@angular/core";
import {
    NguCarousel,
    NguCarouselStore,
    NguCarouselService
} from "@ngu/carousel";

@Component({
    selector: "new-carousel",
    templateUrl: "./app.component.carousel.html",
    styleUrls: ["./app.component.css"],
})

export class NewCarouselComponent implements OnInit {

    private carouselToken: string;

    public carouselTileItems: Array<any>;
    public carouselTile: NguCarousel;

    constructor(private carousel: NguCarouselService) { }

    ngOnInit() {
        this.carouselTileItems = [
             {src:'https://lh3.googleusercontent.com/olnkpY4qf1hyCJEKUNwgIRzSrXcaM-nBWdcEQiGmN4WlRbQpY0d4-uypjZFhKEeUytc=w515-rw'},
             {src: "https://lh3.googleusercontent.com/mtxShDOITU6dtqVqJDZ35fpXgKJbbLMLn6oNQpThU-riE2zufCQkllKISP1j3aRGnKM=w515-rw"},
             {src: "https://lh3.googleusercontent.com/mtxShDOITU6dtqVqJDZ35fpXgKJbbLMLn6oNQpThU-riE2zufCQkllKISP1j3aRGnKM=w515-rw"},
             {src: "https://lh3.googleusercontent.com/qxvJhPrr7NPGQuUBcSD1cHnEJyZYjzzgqVZ0VTJxikLFs1Ogn4yvhC37ydQbJN3Wkw=w515-rw"},
             {src: "https://lh3.googleusercontent.com/olnkpY4qf1hyCJEKUNwgIRzSrXcaM-nBWdcEQiGmN4WlRbQpY0d4-uypjZFhKEeUytc=w515-rw"}
            ];

        this.carouselTile = {
            grid: { xs: 2, sm: 2, md: 2, lg: 2, all: 0 },
            slide: 2,
            speed: 400,
            point: {
                visible: false
            },
            load: 2,
            easing: "ease"
        };
    }


   /* 
     (initData)="initDataFn($event)"
   initDataFn(key: NguCarouselStore) {
   this.carouselToken = key.token;
    } 

    

     resetFn() {
       this.carousel.reset(this.carouselToken);
     }
   
     moveToSlide() {
       this.carousel.moveToSlide(this.carouselToken, 2, false);
     } */
}