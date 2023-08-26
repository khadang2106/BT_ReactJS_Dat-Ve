import data from '../../data/danhSachGhe.json';
import { CANCEL_SEAT, CHECK_OUT, SELECT_SEAT } from '../types/ticketBoxType';

const DEFAULT_STATE = {
  seatList: data,
  cartList: [],
};

export const ticketBoxReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
      const data = JSON.parse(JSON.stringify(state.seatList));
      const cartData = [...state.cartList];

      const indexRow = data.findIndex((element) => {
        return element.hang === action.payload.hang;
      });

      const indexCol = data[indexRow].danhSachGhe.findIndex((element) => {
        return element.soGhe === action.payload.data.soGhe;
      });

      data[indexRow].danhSachGhe[indexCol].dangChon =
        !data[indexRow].danhSachGhe[indexCol].dangChon;

      state.seatList = data;

      const indexCartItem = cartData.findIndex((element) => {
        return element.soGhe === action.payload.data.soGhe;
      });

      if (indexCartItem === -1) {
        cartData.push(data[indexRow].danhSachGhe[indexCol]);
      } else {
        cartData.splice(indexCartItem, 1);
      }

      state.cartList = cartData;

      break;
    }

    case CANCEL_SEAT: {
      const data = JSON.parse(JSON.stringify(state.seatList));
      const cartData = [...state.cartList];

      const indexRow = data.findIndex((element) => {
        return element.hang === action.payload.hang;
      });

      const indexCol = data[indexRow].danhSachGhe.findIndex((element) => {
        return element.soGhe === action.payload.data.soGhe;
      });

      data[indexRow].danhSachGhe[indexCol].dangChon =
        !data[indexRow].danhSachGhe[indexCol].dangChon;

      state.seatList = data;

      cartData.splice(data[indexRow].danhSachGhe[indexCol], 1);

      state.cartList = cartData;

      break;
    }

    case CHECK_OUT: {
      const data = JSON.parse(JSON.stringify(state.seatList));

      data.forEach((element) => {
        element.danhSachGhe.forEach((seat) => {
          if (seat.dangChon) {
            seat.dangChon = !seat.dangChon;
            seat.daDat = !seat.daDat;
          }
        });
      });

      state.cartList = [];
      state.seatList = data;

      break;
    }
  }

  return { ...state };
};
