import { useSelector } from 'react-redux';
import { Home } from 'pages';

function App() {
  const { theme } = useSelector((state) => state.settings);
  document.documentElement.setAttribute('data-theme', theme);
  return <Home />;
}

export default App;
