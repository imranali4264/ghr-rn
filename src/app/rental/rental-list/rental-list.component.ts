import { Component, OnInit } from "@angular/core";

import { RentalService } from "../shared/rental.service";
import { Rental } from "../shared/rental.model";

@Component({
  selector: "car-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: ["./rental-list.component.scss"]
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];
  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    //get all rentals
    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      err => {},
      () => {}
    );
  }
}
