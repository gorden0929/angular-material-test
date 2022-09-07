import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {

  // sidenav controller
  opened = false;

  formAddress = new FormGroup({
    country: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    line1: new FormControl(null, Validators.required),
    line2: new FormControl(null, Validators.required),
    postcode: new FormControl(null, Validators.required),
  });

  countries = [
    {
      value: 'malaysia', key: 'Malaysia',
      states: [
        {
          value: 'selangor', key: 'Selangor', cities: [
            { value: 'petaling-jaya', key: 'Petaling Jaya' },
            { value: 'shah-alam', key: 'Shah Alam' },
            { value: 'subang-jaya', key: 'Subang Jaya' },
          ]
        },
        { value: 'kuala-lumpur', key: 'Kuala Lumpur' },
        { value: 'penang', key: 'Penang' },
        { value: 'johor', key: 'Johor' },
        { value: 'perak', key: 'Perak' },
        { value: 'kedah', key: 'Kedah' },
        { value: 'kelantan', key: 'Kelantan' },
        { value: 'pahang', key: 'Pahang' },
        { value: 'terengganu', key: 'Terengganu' },
        { value: 'sabah', key: 'Sabah' },
        { value: 'sarawak', key: 'Sarawak' },
        { value: 'negeri-sembilan', key: 'Negeri Sembilan' },
        { value: 'melaka', key: 'Melaka' },
        { value: 'perlis', key: 'Perlis' },
        { value: 'labuan', key: 'Labuan' },
        { value: 'putrajaya', key: 'Putrajaya' },
      ]
    },
    {
      value: 'singapore', key: 'Singapore',
      states: [
        { value: 'central', key: 'Central' },
        { value: 'east', key: 'East' },
        { value: 'north-east', key: 'North-East' },
        { value: 'north', key: 'North' },
        { value: 'west', key: 'West' },
        { value: 'south', key: 'South' },
      ]
    },
    { value: 'thailand', key: 'Thailand' },
  ];

  states: { value: string, key: string, cities?: { value: string, key: string }[] }[] = [];
  cities: { value: string, key: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onCountryChange(value: string) {
    const countryObj = this.countries.find(c => c.value === value);
    this.states = countryObj?.states || [];

  }

  onStateChange(value: string) {
    const stateObj = this.states.find(s => s.value === value);
    this.cities = stateObj?.cities || [];
  }

  onSubmit() {
    console.log(this.formAddress.value);
  }


}
