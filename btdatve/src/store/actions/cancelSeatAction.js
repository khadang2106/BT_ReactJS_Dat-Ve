import { CANCEL_SEAT } from '../types/ticketBoxType';

export const cancelSeatAction = (data, hang) => {
  return {
    type: CANCEL_SEAT,
    payload: { data, hang },
  };
};
