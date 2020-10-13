import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { vehiclesList,
        productsList,
        loadedProductsList,
        roleTabs } from './app-config';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'loading';

  public role = 'customer';
  public tabs = roleTabs[this.role];

  public vehicles = vehiclesList;
  public selectedVehiclesCount = 0;
  public selectedVehicles = [];

  public products = productsList;
  public loadedProducts = loadedProductsList;
  loadedProductsCount = 0;
  unweighedProductsCount = 0;

  constructor(private snackBar: MatSnackBar) {}

  public setRole(role): void {
    this.role = role;
    this.tabs = roleTabs[role];
  }

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
    if (this.tabs.vehicle && this.selectedVehiclesCount === 0) {
      this.snackBar.open('Select your vehicle to begin.', 'OK', {
        duration: 2500
      });
    }
  }
}
