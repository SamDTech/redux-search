import { Action } from "../actions";
import axios from "axios";
import { ActionType } from "../action-types";

const searchRepositories = (term: string) => async (dispatch: any) => {
  dispatch({ type: ActionType.SEARCH_REPOSITORY });

  try {
    const { data } = await axios.get("/");

    dispatch({ type: ActionType.SEARCH_SUCCESS_REPOSITORY, payload: data });
  } catch (error) {
    dispatch({
      type: ActionType.SEARCH_ERROR_REPOSITORY,
      payload: error.message,
    });
  }
};
