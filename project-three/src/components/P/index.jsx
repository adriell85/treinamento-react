import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';
export const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState, setState } = theContext;
  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {contextState.body} {contextState.counter}
    </p>
  );
};
