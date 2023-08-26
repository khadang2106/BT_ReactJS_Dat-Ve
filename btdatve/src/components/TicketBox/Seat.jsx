import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSeatAction } from '../../store/actions/selectSeatAction';

class Seat extends Component {
  renderSeat = (data) => {
    return data.danhSachGhe.map((element) => {
      const { soGhe, daDat, dangChon } = element;
      return (
        <td key={soGhe}>
          <button
            onClick={() =>
              this.props.dispatch(selectSeatAction(element, data.hang))
            }
            disabled={daDat}
            className={`seat ${daDat ? 'reservedSeat' : ''} ${
              dangChon && 'selectedSeat'
            }`}
          ></button>
        </td>
      );
    });
  };

  render() {
    return <>{this.renderSeat(this.props.element)}</>;
  }
}

export default connect()(Seat);
