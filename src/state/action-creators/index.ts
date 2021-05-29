import { Action } from "../actions";
import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";

export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SEARCH_REPOSITORY });

  try {
    const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
        params: {
            text: term
        }
    });
    const result = data.objects.map((result: any)=> result.package.name)
    dispatch({ type: ActionType.SEARCH_SUCCESS_REPOSITORY, payload: result });
  } catch (error) {
    dispatch({
      type: ActionType.SEARCH_ERROR_REPOSITORY,
      payload: error.message,
    });
  }
};
