import React, { Component } from 'react';
import Seat from './Seat';

export default class SeatRow extends Component {
  render() {
    return (
      <tr className="text-center">
        <td className="text-white font-weight-bold">
          {this.props.element.hang}
        </td>
        <Seat element={this.props.element} />
      </tr>
    );
  }
}
