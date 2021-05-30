import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const dispatch = useDispatch()

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      dispatch(actionCreators.searchRepositories(term))
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={term} onChange={e=> setTerm(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
