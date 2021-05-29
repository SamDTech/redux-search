import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORY;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_SUCCESS_REPOSITORY;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_ERROR_REPOSITORY;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
