import axios from "axios";
import { selectToken } from "../user/selectors";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const GETALLTOURS = "GETALLTOURS";
export const ADDTOUR = "ADDTOUR";
export const DELETETOUR = "DELETETOUR";

const getTours = (tours) => {
  return {
    type: GETALLTOURS,
    payload: tours,
  };
};

const addTour = (tour) => {
  return {
    type: ADDTOUR,
    payload: tour,
  };
};

const deleteTour = (tour) => {
  return {
    type: DELETETOUR,
    payload: tour,
  };
};

export const getAllTours = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const token = selectToken(getState());
    try {
      const response = await axios.get(
        `${apiUrl}/tours`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(`RESPONSE I GOT:`, response);
      dispatch(getTours(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};

export const CreateTour = (name, cafe, description, district, date) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const token = selectToken(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/tours`,
        {
          name,
          cafe,
          description,
          district,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addTour(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};

export const DeleteTour = (tourId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const token = selectToken(getState());

    try {
      const response = await axios.delete(
        `${apiUrl}/${tourId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(deleteTour(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};
