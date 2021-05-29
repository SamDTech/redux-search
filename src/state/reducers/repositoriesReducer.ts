interface RepositoryState {
  loading: Boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: RepositoryState, action: Action): RepositoryState => {
  switch (action.type) {
    case "search_repositories":
      return { ...state, loading: true, error: null };
    case "search_repositories_success":
      return { ...state, loading: false, data: action.payload };
    case "search_repositories_error":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
