interface RepositoryState {
  loading: Boolean;
  error: string | null;
  data: string[];
}



interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORY;
  payload?: any;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_SUCCESS_REPOSITORY;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_ERROR_REPOSITORY;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

enum ActionType {
  SEARCH_REPOSITORY = "search_repositories",
  SEARCH_SUCCESS_REPOSITORY = "search_repositories_success",
  SEARCH_ERROR_REPOSITORY = "search_repositories_error",
}

const reducer = (state: RepositoryState, action: Action): RepositoryState => {
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
