import { useSelector } from 'react-redux';
import { Home } from 'pages';

const App = () => {
  const { theme } = useSelector((state) => state.settings);
  document.documentElement.setAttribute('data-theme', theme);
  return <Home />;
}

export default App;
