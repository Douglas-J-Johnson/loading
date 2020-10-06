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
      id: 0,
      plate: 'XXX XXX',
      isSelected: false
    },
    {
      id: 1,
      plate: 'YYY YYY',
      isSelected: true
    },
  ];
  public selectedVehiclesCount = 0;
  public selectedVehicles = [];

  public products = [
    {
      id: 0,
      bay: 15,
      name: 'item 1',
    },
    {
      id: 1,
      bay: 20,
      name: 'item 2',
    }
  ];
  public loadedProducts = [
    {
      id: 0,
      bay: 15,
      name: 'item 1',
      weighed: true,
      weight: 0
    }
  ];

  public toggleVehicleSelection(id): void {
    this.vehicles.forEach(vehicle => {
      if (vehicle.id === id) {
        vehicle.isSelected = !vehicle.isSelected;
      }
    });

    this.setSelectedVehicles();
  }

  public setSelectedVehicles(): void {
    let count = 0;
    this.selectedVehicles = [];

    this.vehicles.forEach(vehicle => {
      if (vehicle.isSelected) {
        count += 1;
        this.selectedVehicles.push(vehicle);
      }
    });

    this.selectedVehiclesCount = count;
  }

  ngOnInit(): void {
    this.setSelectedVehicles();
  }
}
