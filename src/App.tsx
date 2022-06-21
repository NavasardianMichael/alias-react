import { FC, useContext } from 'react';
import { state } from '.';
import './App.css';
import Home from './components/Home/Home';
import { PAGES } from './constants/view';
import { T_ViewState } from './store/view/types';

const App: FC<{}> = () => {
  
  const viewContext = useContext(state.ViewContext)

  const PAGE_COMPONENTS: { [key in T_ViewState['currentPage']]: JSX.Element } = {
    [PAGES.home]: <Home />,
    [PAGES.pre]: <Home />,
    [PAGES.game]: <Home />,
  }

  return (
    <div className='app'>
      {
        PAGE_COMPONENTS[viewContext?.currentPage ?? PAGES.home]
      }
    </div>
  );
}
export default App;