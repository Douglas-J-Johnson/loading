import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'loading';

  public vehicles = [
    {
      image: 'https://hondablogitalia.files.wordpress.com/2016/01/2017-honda-ridgeline-006.jpg',
      plate: 'XXX XXX',
      isSelected: true
    },
    {
      image: 'https://car-images.bauersecure.com/pagefiles/67808/1040x585/hr-001.jpg',
      plate: 'YYY YYY',
      selected: false
    },
  ];
  public selectedVehiclesCount = 0;

  public toggleVehicleSelection(index): void {
    this.vehicles[index].isSelected = !this.vehicles[index].isSelected;
    this.setSelectedVehiclesCount();
  }

  public setSelectedVehiclesCount(): void {
    let count = 0;

    this.vehicles.forEach(vehicle => {
      if (vehicle.isSelected) {
        count += 1;
      }
    });

    console.log('Counting Vehicles...', count);
    this.selectedVehiclesCount = count;
  }

  ngOnInit(): void {
    this.setSelectedVehiclesCount();
  }
}
