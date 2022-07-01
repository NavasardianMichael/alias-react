import { FC } from 'react';
import { useSelector } from 'react-redux';
import { PAGE_COMPONENTS } from './constants/app';
import './App.css';
import { selectCurrentPage } from './store/app/selectors';

const App: FC<{}> = () => {
  
  const currentPage = useSelector(selectCurrentPage)

  return (
    PAGE_COMPONENTS[
      currentPage
    ]
  );
}

export default App;