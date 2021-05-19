import { GETALLTOURS, DELETETOUR, ADDTOUR } from "./action";

const initialState = {
  tours: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GETALLTOURS:
      return {
        ...state,
        tours: action.payload,
      };
    case ADDTOUR:
      return { ...state, tours: [...state.tours, action.payload] };
    case DELETETOUR: {
      const newtourArray = state.tours.filter((newarr) => {
        return newarr.id !== action.payload.deletedTour;
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
