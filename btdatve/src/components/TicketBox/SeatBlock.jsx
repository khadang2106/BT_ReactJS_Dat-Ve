import React, { Component } from 'react';
import SeatRow from './SeatRow';
import { connect } from 'react-redux';

class SeatBlock extends Component {
  renderSeatList = () => {
    return this.props.seatList.map((element, index) => {
      if (element.hang !== '') {
        return <SeatRow key={index} element={element} />;
      }
    });
  };

  render() {
    return (
      <div className="seat-block overlay-bg mx-auto">
        <div className="screen mb-5 text-center">Screen</div>
        <table>
          <thead>
            <tr className="text-white text-center">
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
            </tr>
          </thead>
          <tbody>{this.renderSeatList()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.ticketBoxReducer.seatList,
  };
};

export default connect(mapStateToProps)(SeatBlock);
