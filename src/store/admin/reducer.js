import {
  GETALLTOURS,
  DELETETOUR,
  ADDTOUR,
  SAVEDETAILEDTOUR,
  UPDATED_TOUR_LIKES,
} from "./action";

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
        return newarr.id !== action.payload.deletedTour;
      });
      return {
        ...state,
        tours: newtourArray,
      };
    }
    case UPDATED_TOUR_LIKES:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
