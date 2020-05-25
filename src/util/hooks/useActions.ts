import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

export function useActions<A, M extends ActionCreatorsMapObject<A>>(
  actions: M,
  deps?: any[]
) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, actions, ...deps] : [dispatch, actions]
  );
}
