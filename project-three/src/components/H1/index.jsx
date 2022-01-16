import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;
  return (
    <h1>
      {contextState.title} {contextState.counter}
    </h1>
  );
};
