import { Component } from './component.model';

export interface Capacitor extends Component {
  capacitence: number;
  tolerance: number;
  maxVoltage: number;
}
