import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogsRequest } from "../../store/actions/dogsActions/dogsActions";
import { RootState } from "../../store/reducers/rootReducer";

export function Home() {
  const dispatch = useDispatch();
  const { pending, dogs, error } = useSelector(
    (state: RootState) => state.dogs
  );

  useEffect(() => {
    dispatch(fetchDogsRequest());
  }, [dispatch]);
  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        dogs?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
}
