import { FC } from 'react';
import { useSelector } from 'react-redux';
import { PAGE_COMPONENTS } from './constants/view';
import './App.css';
import { RootState } from '.';

const App: FC<{}> = () => {
  
  const currentPage = useSelector((state: RootState) => state.view.currentPage)

  return (
    PAGE_COMPONENTS[
      currentPage
    ]
  );
}

export default App;