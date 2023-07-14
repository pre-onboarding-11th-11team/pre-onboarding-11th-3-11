import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Issues from './page/Issues';
import IssueDetail from './page/IssueDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Issues /> },
      { path: '/:id', element: <IssueDetail /> },
    ],
  },
]);

export default router;
