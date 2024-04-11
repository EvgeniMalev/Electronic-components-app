import { Component } from './component.model';

export interface Resistor extends Component {
  resistance: number;
  tolerance: number;
  powerRating: number;
}
