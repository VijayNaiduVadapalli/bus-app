const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'BUS_SELECTION') {
    return { ...state, selectedBusId: action.id };
  }
  if (action.type === 'PASSENGERINFO') {
    return { ...state, passengerInfo: action.passengerInfo };
  }
  return state;
};
