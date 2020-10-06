import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
      isSelected: false
    },
  ];
  public selectedVehiclesCount = 0;
  public selectedVehicles = [];

  public products = [
    {
      id: 0,
      bay: 2,
      name: 'item 1',
    },
    {
      id: 1,
      bay: 3,
      name: 'item 2',
    },
    {
      id: 2,
      bay: 10,
      name: 'item 3',
    },
    {
      id: 3,
      bay: 12,
      name: 'item 4',
    },
    {
      id: 4,
      bay: 15,
      name: 'item 5',
    },
    {
      id: 5,
      bay: 16,
      name: 'item 6',
    },
    {
      id: 6,
      bay: 18,
      name: 'item 7',
    },
    {
      id: 7,
      bay: 20,
      name: 'item 8',
    },
    {
      id: 8,
      bay: 21,
      name: 'item 9',
    },
    {
      id: 9,
      bay: 22,
      name: 'item 10',
    },
    {
      id: 10,
      bay: 24,
      name: 'item 11',
    },
    {
      id: 11,
      bay: 25,
      name: 'item 12',
    },
    {
      id: 12,
      bay: 26,
      name: 'item 13',
    }
  ];
  public loadedProducts = [
    {
      id: 0,
      bay: 15,
      name: 'item 1',
      weighed: true,
      weight: 500
    },
    {
      id: 0,
      bay: 15,
      name: 'item 1',
      weighed: false,
      weight: 0
    }
  ];

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
    this.snackBar.open('Select your vehicle to begin.', 'OK', {
      duration: 2500
    });
  }
}
