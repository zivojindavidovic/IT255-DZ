import { Component, OnInit } from '@angular/core';
import { Ponude } from './info'

@Component({
  selector: 'app-barcomponent',
  templateUrl: './barcomponent.component.html',
  styleUrls: ['./barcomponent.component.css']
})
export class BarcomponentComponent implements OnInit {
  aboutUs = true;

  info : Ponude = new Ponude();
  ngOnInit(): void {

  }

  ponuda(){
    this.aboutUs = true;
    this.info.naziv = "Ponuda1";
    this.info.opis = "Opis ponude 1";
    this.info.cena = 25;
  }

  preporuka(){
    this.aboutUs = true;
    this.info.naziv = "Preporuka 1";
    this.info.opis = "Opis preporuke 1";
    this.info.cena = 10;
  }

  oNama(){
    this.aboutUs = false;
    this.info.vlasnik = "Zivojin Davidovic";
    this.info.lokacija = "Adresa 1";
    this.info.godinaOsnivanja = 2022;
  }
}
