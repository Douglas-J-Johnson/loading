import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  @Input() vehicles = [];
  @Output() toggleVehicleSelection = new EventEmitter();

  public toggleMyVehicle(index): void {
    this.toggleVehicleSelection.emit(index);
  }
}
