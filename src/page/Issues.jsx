import React, { useContext, useEffect } from 'react';
import useGithubAPI from '../common/hook/useGitHubAPI';
import { GitHubStateContext } from '../common/context/GitHubContext';
import IssueItem from '../component/Issue/IssueItem';

const Issues = () => {
  const { loading, error, issues } = useContext(GitHubStateContext);
  const { fetchInit, fetchIssues } = useGithubAPI('facebook', 'react');

  useEffect(() => {
    fetchInit();
    fetchIssues();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div>
      {issues.map((issue, idx) => (
        <IssueItem key={idx} issue={issue} />
      ))}
    </div>
  );
};

export default Issues;
