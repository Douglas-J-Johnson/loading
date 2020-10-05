import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  @Input() vehicles = [];
  @Output() selectVehicle = new EventEmitter();

  public selectMyVehicle(index): void {
    console.log('Select', index);
    this.selectVehicle.emit(index);
  }
}
