import axios from "axios";
import { selectToken } from "../user/selectors";
import { apiUrl } from "../../config/constants";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import { useSelector } from "react-redux";

export const GETALLTOURS = "GETALLTOURS";
export const SAVEDETAILEDTOUR = "SAVEDETAILEDTOUR";
export const ADDTOUR = "ADDTOUR";
export const DELETETOUR = "DELETETOUR";
export const UPDATED_TOUR_LIKES = "UPDATED_TOUR_LIKES";

const getTours = (tours) => {
  return {
    type: GETALLTOURS,
    payload: tours,
  };
};

const saveDetailedTour = (tour) => {
  return {
    type: SAVEDETAILEDTOUR,
    payload: tour,
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

export const incrementingLikes = (rate) => ({
  type: UPDATED_TOUR_LIKES,
  payload: rate,
});

export const getAllTours = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    //const token = selectToken(getState());
    try {
      const response = await axios.get(`${apiUrl}/tours`);
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

export const CreateTour = (
  title,
  cafes,
  description,
  district,
  date,
  imageUrl,
  history
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const token = selectToken(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/tours`,
        {
          title,
          cafes,
          description,
          district,
          date,
          imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addTour(response.data));
      history.push("/tours");
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
      const response = await axios.delete(`${apiUrl}/tours/${tourId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`RESPONSE DELETED TOUR`, response);
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

export const getDetailedTour = (tourid) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    //const token = selectToken(getState());
    try {
      const response = await axios.get(`${apiUrl}/tours/${tourid}`);
      console.log(`RESPONSE I GOT:`, response.data);
      dispatch(saveDetailedTour(response.data));
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

export const enrollToTour = (tourid) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const token = selectToken(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/tours/${tourid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "You successfully enrolled!",
          1500
        )
      );
      dispatch(appDoneLoading());
      dispatch(getDetailedTour(tourid));
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

export const cancelEnrolltour = (tourid) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const token = selectToken(getState());

    try {
      const response = await axios.delete(`${apiUrl}/tours/${tourid}/enroll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "You successfully  unrolled!",
          1500
        )
      );
      dispatch(appDoneLoading());
      dispatch(getDetailedTour(tourid));
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

export const incrementLikes = (tourid) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${apiUrl}/tours/${tourid}`);
    dispatch(incrementingLikes(response.data));
  };
};
