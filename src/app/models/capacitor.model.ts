import { Component } from './component.model';

export interface Resistor extends Component {
  capacitence: number;
  tolerance: number;
  maxVoltage: number;
}
