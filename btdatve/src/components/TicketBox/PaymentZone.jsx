import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelSeatAction } from '../../store/actions/cancelSeatAction';
import { checkOutAction } from '../../store/actions/checkOutAction';

class PaymentZone extends Component {
  renderContent = () => {
    return this.props.seatList.map((element) => {
      return element.danhSachGhe.map((seat) => {
        const { soGhe, gia, dangChon } = seat;

        if (dangChon) {
          return (
            <tr key={soGhe}>
              <td>{soGhe}</td>
              <td>{gia.toLocaleString()}VNĐ</td>
              <td>
                <i
                  onClick={() =>
                    this.props.dispatch(cancelSeatAction(seat, element.hang))
                  }
                  style={{ cursor: 'pointer' }}
                  className="fa fa-times text-danger"
                ></i>
              </td>
            </tr>
          );
        }
      });
    });
  };

  total = () => {
    return this.props.cartList.reduce((total, element) => {
      if (element.dangChon) {
        total += element.gia;

        return total;
      }
    }, 0);
  };

  render() {
    return (
      <div className="payment-zone overlay-bg p-3">
        <h5
          style={{ fontSize: '30px' }}
          className="text-warning text-center font-italic"
        >
          Seat Selection ({this.props.cartList.length})
        </h5>
        <ul>
          <li className="text-success">Selected Seat</li>
          <li className="text-danger">Reserved Seat</li>
          <li>Available Seat</li>
        </ul>
        <table className="table table-bordered table-hover table-dark">
          <thead className="text-center">
            <tr>
              <th>Seat</th>
              <th>Price</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody className="text-center">{this.renderContent()}</tbody>
        </table>
        {this.props.cartList.length === 0 ? (
          <></>
        ) : (
          <h6>
            TOTAL SEAT: {this.props.cartList.length}{' '}
            {this.props.cartList.length === 1 ? 'seat' : 'seats'}
          </h6>
        )}
        {this.props.cartList.length === 0 ? (
          <></>
        ) : (
          <h5>TOTAL: {this.total().toLocaleString()}VNĐ</h5>
        )}
        {this.props.cartList.length === 0 ? (
          <></>
        ) : (
          <button
            onClick={() => this.props.dispatch(checkOutAction())}
            className="btn btn-warning font-weight-bold"
          >
            Proceed to Check Out
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.ticketBoxReducer.seatList,
    cartList: state.ticketBoxReducer.cartList,
  };
};

export default connect(mapStateToProps)(PaymentZone);
