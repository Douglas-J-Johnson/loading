import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'loading';

  tabs = {
    vehicle: true,
    products: true,
    pay: true,
    load: true,
    checkout: true
  }

  public vehicles = [
    {
      id: 0,
      plate: 'XXX XXX',
      image: 'https://hondablogitalia.files.wordpress.com/2016/01/2017-honda-ridgeline-006.jpg',
      isSelected: false
    },
    {
      id: 1,
      plate: 'YYY YYY',
      image: 'https://car-images.bauersecure.com/pagefiles/67808/1040x585/hr-001.jpg',
      isSelected: false
    },
  ];
  public selectedVehiclesCount = 0;
  public selectedVehicles = [];

  public products = [
    {
      id: 0,
      location: 2,
      name: 'item 1',
    },
    {
      id: 1,
      location: 3,
      name: 'item 2',
    },
    {
      id: 2,
      location: 10,
      name: 'item 3',
    },
    {
      id: 3,
      location: 12,
      name: 'item 4',
    },
    {
      id: 4,
      location: 15,
      name: 'item 5',
    },
    {
      id: 5,
      location: 16,
      name: 'item 6',
    },
    {
      id: 6,
      location: 18,
      name: 'item 7',
    },
    {
      id: 7,
      location: 20,
      name: 'item 8',
    },
    {
      id: 8,
      location: 21,
      name: 'item 9',
    },
    {
      id: 9,
      location: 22,
      name: 'item 10',
    },
    {
      id: 10,
      location: 24,
      name: 'item 11',
    },
    {
      id: 11,
      location: 25,
      name: 'item 12',
    },
    {
      id: 12,
      location: 26,
      name: 'item 13',
    }
  ];
  public loadedProducts = [
    {
      id: 0,
      location: 15,
      name: 'item 1',
      weighed: true,
      weight: 500
    },
    {
      id: 0,
      location: 15,
      name: 'item 2',
      weighed: false,
      weight: 0
    }
  ];
  loadedProductsCount = 0;
  unweighedProductsCount = 0;

  constructor(private snackBar: MatSnackBar) {}

  public toggleVehicleSelection(id): void {
    this.vehicles.forEach(vehicle => {
      if (vehicle.id === id) {
        vehicle.isSelected = !vehicle.isSelected;
      }
    });

    this.setSelectedVehicles();
  }

  public setSelectedVehicles(): void {
    let selectedCount = 0;
    this.selectedVehicles = [];

    this.vehicles.forEach(vehicle => {
      if (vehicle.isSelected) {
        selectedCount += 1;
        this.selectedVehicles.push(vehicle);
      }
    });

    this.selectedVehiclesCount = selectedCount;
  }

  public setLoadedProducts(): void {
    let loadedCount = 0;
    this.selectedVehicles = [];

    this.vehicles.forEach(vehicle => {
      if (vehicle.isSelected) {
        loadedCount += 1;
        this.selectedVehicles.push(vehicle);
      }
    });

    this.selectedVehiclesCount = loadedCount;
  }

  ngOnInit(): void {
    this.setSelectedVehicles();
    this.snackBar.open('Select your vehicle to begin.', 'OK', {
      duration: 2500
    });
  }
}
