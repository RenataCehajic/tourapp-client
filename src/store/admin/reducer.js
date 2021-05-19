import { GETALLTOURS, DELETETOUR, ADDTOUR, SAVEDETAILEDTOUR } from "./action";

const initialState = {
  tours: [],
  detailedTour: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GETALLTOURS:
      return {
        ...state,
        tours: action.payload,
      };
    case SAVEDETAILEDTOUR:
      return {
        ...state,
        detailedTour: action.payload,
      };
    case ADDTOUR:
      return { ...state, tours: [...state.tours, action.payload] };
    case DELETETOUR: {
      const newtourArray = state.tours.filter((newarr) => {
        return newarr.id !== action.payload.id;
      });
      return {
        ...state,
        tours: newtourArray,
      };
    }

    default:
      return state;
  }
}
