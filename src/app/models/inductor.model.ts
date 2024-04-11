import { Component } from './component.model';

export interface Inductor extends Component {
  inductance: number;
  numcoils: number;
  area-coil: number;
}
