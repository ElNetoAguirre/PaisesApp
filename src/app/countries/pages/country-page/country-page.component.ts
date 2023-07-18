import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesService } from "../../services/countries.service";
import { switchMap } from "rxjs";
import { Country } from "../../interfaces/country";

@Component({
  selector: "app-country-page",
  templateUrl: "./country-page.component.html",
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private countriesService:CountriesService,
  ) {}

  get translations() {
    return Object.values(this.country!.translations);
  }

  get currencies() {
    return Object.values(this.country!.currencies);
  }

  get languages() {
    return Object.values(this.country!.languages);
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl("");
        return this.country = country;
      });
  }
}