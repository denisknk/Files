import {
  LOAD_FILE_PENDING, LOAD_FILE_FULFILLED, LOAD_FILE_REJECTED,
} from '../actionTypes/files';
import axios from "axios";
import { API_URL } from "./config";

export const loadFiles = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_FILE_PENDING });

    const files = await axios.get(`${API_URL}/files`);

    dispatch({ type: LOAD_FILE_FULFILLED, payload: files.data });
  } catch (error) {
    dispatch({ type: LOAD_FILE_REJECTED, payload: error });
  }
};
