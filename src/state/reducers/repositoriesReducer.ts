import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoryState {
  loading: Boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY:
      return { ...state, loading: true, error: null };
    case ActionType.SEARCH_SUCCESS_REPOSITORY:
      return { ...state, loading: false, data: action.payload };
    case ActionType.SEARCH_ERROR_REPOSITORY:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
