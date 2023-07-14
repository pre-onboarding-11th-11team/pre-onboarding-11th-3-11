import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Markdown from '../util/markdown';
import { GitHubStateContext } from '../common/context/GitHubContext';
import Loading from '../component/Loading/Loading';

const IssueDetail = () => {
  const { loading, error } = useContext(GitHubStateContext);
  const { state: issue } = useLocation();

  if (error) return <div>Error...</div>;

  return <>{loading ? <Loading /> : <Markdown content={issue.body} />}</>;
};

export default IssueDetail;
