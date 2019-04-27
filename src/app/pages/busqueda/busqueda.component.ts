import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ClientsService } from '../../services/clients.service';
import { CountryModel } from 'src/app/models/country.model';
import { ClientModel } from 'src/app/models/client.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  countries: CountryModel[];
  clients: ClientModel[];
  countryModel: string;
  nameModel: string;
  reasonModel: string;

  constructor(private countryService: CountryService, private clientsService: ClientsService) {
    this.countries = [];
    this.clients = [];
    countryService.getCountries().subscribe(data => {
      data.forEach(c => {
        this.countries.push(c);
        // console.log(c);
      });
    });
  }

  buscar() {
    console.log(this.countryModel);
    console.log(this.reasonModel);
    console.log(this.nameModel);
    this.clientsService.getAll(this.countryModel, this.reasonModel, this.nameModel).subscribe(data => {
      data.forEach(c => {
        this.clients.push(c);
        console.log(c);
      });
    });
  }
  ngOnInit() {
  }

}
