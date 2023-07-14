import ReactDOM from 'react-dom/client';
import App from './App';
import { GitHubProvider } from './common/context/GitHubContext';
import GlobalStyle from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GitHubProvider>
    <GlobalStyle />
    <App />
  </GitHubProvider>,
);
