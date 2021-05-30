import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories } = useActions();

  const { loading, error, data } = useTypedSelector(
    (state ) => state.repositories
  );

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data && data.map((name) =>(
          <div key={name}>{name}</div>
      ))}
    </div>
  );
};

export default RepositoriesList;
