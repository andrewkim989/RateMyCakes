import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RateMyCakes';
  cakes = [];
  errors: any;
  cake: any;
  newCake: any;
  newReview: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getAllCakes();
    this.newCake = { name: "", image: "" };
    this.newReview = { rate: "", comment: "" };
  }

  getAllCakes() {
    let c = this._httpService.getAll();
    c.subscribe(data => {
      console.log("Got all cakes!", data);
      this.cakes = data["cakes"];
    });
    this.newReview = { rate: "", comment: "" };
  }

  createCake() {
    this.errors = null;
    let createNew = this._httpService.createCake({name: this.newCake.name,
      image: this.newCake.image});
    createNew.subscribe(
      newdata => {console.log("Cake submitted!", newdata)});
    this.newCake = { name: "", image: "" };
    this.getAllCakes();
  }

  getCake(cake) {
    let c = this._httpService.getCake(cake);
    c.subscribe(data => {
      console.log("Got the cake!", data);
      this.cake = data["cake"];

      if (this.cake.reviews.length == 0) {
        this.cake["avg"] = "(No rating)";
      }
      else {
        var count = 0;
        var sum = 0;
        for (let rating of this.cake.reviews) {
          count++;
          sum = sum + rating.rate;
        }
        let avg = (sum / count).toFixed(2);
        this.cake["avg"] = avg;
      }
    });
  }

  reviewCake(cake, review) {
    this.newReview.rate = review["newReview.rate"];
    this.newReview.comment = review["newReview.comment"];

    let r = this._httpService.reviewCake(cake, this.newReview);
    r.subscribe(data => {
      console.log("Got the review!", data);
    });
    this.newReview = { rate: "", comment: "" };
    this.getCake(cake);
  }
}
