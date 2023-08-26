import { SELECT_SEAT } from '../types/ticketBoxType';

export const selectSeatAction = (data, hang) => {
  return {
    type: SELECT_SEAT,
    payload: { data, hang },
  };
};
