import React, { Fragment, useContext, useEffect } from 'react';
import useGithubAPI from '../common/hook/useGitHubAPI';
import { GitHubStateContext } from '../common/context/GitHubContext';
import IssueItem from '../component/Issue/IssueItem';
import Ad from '../component/Ad/Ad';
import Loading from '../component/Loading/Loading';

const Issues = () => {
  const { loading, error, issues } = useContext(GitHubStateContext);
  const { fetchIssues } = useGithubAPI('facebook', 'react');

  useEffect(() => {
    fetchIssues();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      {issues.map((issue, idx) => (
        <>
          <IssueItem key={idx} issue={issue} />
          {idx % 4 === 3 && <Ad />}
        </>
      ))}
      {loading ? <Loading /> : undefined}
    </>
  );
};

export default Issues;
