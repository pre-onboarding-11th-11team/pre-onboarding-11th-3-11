import React, { useContext, useEffect } from 'react';
import useGithubAPI from '../common/hook/useGitHubAPI';
import { GitHubStateContext } from '../common/context/GitHubContext';

const Issues = () => {
  const { loading, error, issues } = useContext(GitHubStateContext);
  const { fetchInit, fetchIssues } = useGithubAPI('facebook', 'react');

  useEffect(() => {
    fetchInit();
    fetchIssues();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  console.log(issues);

  return <div>Issues</div>;
};

export default Issues;
