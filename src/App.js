import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/common/NavigatonBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
