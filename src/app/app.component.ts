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
  title = 'loader';

  public customerID = 1;
  public loaderID = 1;
  public role = 'load';
  public tabs = roleTabs[this.role];

  public vehicles = vehiclesList;
  public customerVehicles = [];
  public customerVehiclesCount = 0;
  public loaderVehicle = [];
  public loaderVehicleCount = 0;

  public products = productsList;
  public productsColumns = [
    'name',
    'location',
    'select'
  ];
  public loadedProducts = [];
  public loadedProductsCount = 0;
  public unweighedProductsCount = 0;
  public loaderProduct = [];
  public loaderProductCount = 0;

  constructor(private snackBar: MatSnackBar) {}

  public setRole(role): void {
    this.role = role;
    this.tabs = roleTabs[role];
  }

  public toggleCustomerVehicle(id): void {
    this.vehicles.forEach(vehicle => {
      if (vehicle.id === id) {
        if (vehicle.customerID === 0) {
          vehicle.customerID = this.customerID;
        }
        else {
          vehicle.customerID = 0;
        }
      }
    });

    this.setCustomerVehicles();
  }

  public toggleloaderVehicle(id): void {
    this.vehicles.forEach(vehicle => {
      if (vehicle.id === id) {
        if (vehicle.loaderID === 0) {
          vehicle.loaderID = this.loaderID;
        }
        else {
          vehicle.loaderID = 0;
        }
      }
    });

    // this.setLoadingVehicles();
  }

  public setCustomerVehicles(): void {
    let selectedCount = 0;
    let unweighedCount = 0;
    let loadedCount = 0;

    this.customerVehicles = [];
    this.loadedProducts = [];

    this.vehicles.forEach(vehicle => {
      if (vehicle.customerID === this.customerID) {
        selectedCount += 1;
        this.customerVehicles.push(vehicle);

        loadedCount += vehicle.loadedProducts.length;

        vehicle.loadedProducts.forEach(loadedProduct => {
          this.loadedProducts.push(loadedProduct);
          if (!loadedProduct.weighed) {
            unweighedCount += 1;
          }
        });
      }
    });

    this.customerVehiclesCount = selectedCount;
    this.unweighedProductsCount = unweighedCount;
    this.loadedProductsCount = loadedCount;
  }

  ngOnInit(): void {
    this.setCustomerVehicles();

    if (this.tabs.vehicle && this.customerVehiclesCount === 0) {
      this.snackBar.open('Select your vehicle to begin.', 'OK', {
        duration: 2500
      });
    }
  }
}
