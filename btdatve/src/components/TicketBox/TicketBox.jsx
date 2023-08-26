import React, { Component } from 'react';
import './style.css';
import SeatBlock from './SeatBlock';
import PaymentZone from './PaymentZone';

export default class TicketBox extends Component {
  render() {
    return (
      <div>
        <h1 className="text-warning text-center py-3">
          CYBER THEATER'S TICKET BOX
        </h1>
        <div className="d-flex container mb-4">
          <SeatBlock />

          <PaymentZone />
        </div>
      </div>
    );
  }
}
