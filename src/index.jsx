import ReactDOM from 'react-dom/client';
import App from './App';
import { GitHubProvider } from './common/context/GitHubContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GitHubProvider>
    <App />
  </GitHubProvider>,
);
