import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { vehiclesList,
        productsList,
        roleTabs } from './app-config';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'loading';

  public role = 'Customer';
  public tabs = roleTabs[this.role];

  public vehicles = vehiclesList;
  public selectedVehicles = [];
  public selectedVehiclesCount = 0;

  public products = productsList;
  public productsColumns = [
    'name',
    'location',
    'select'
  ];
  public loadedProducts = [];
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
    let unweighedCount = 0;
    let loadedCount = 0;

    this.selectedVehicles = [];
    this.loadedProducts = [];

    this.vehicles.forEach(vehicle => {
      if (vehicle.isSelected) {
        selectedCount += 1;
        this.selectedVehicles.push(vehicle);

        loadedCount += vehicle.loadedProducts.length;

        vehicle.loadedProducts.forEach(loadedProduct => {
          this.loadedProducts.push(loadedProduct);
          if (!loadedProduct.weighed) {
            unweighedCount += 1;
          }
        });
      }
    });

    this.selectedVehiclesCount = selectedCount;
    this.unweighedProductsCount = unweighedCount;
    this.loadedProductsCount = loadedCount;
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
