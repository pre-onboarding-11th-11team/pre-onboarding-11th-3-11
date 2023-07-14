import React, { Fragment, useContext, useEffect } from 'react';
import useGithubAPI from '../common/hook/useGitHubAPI';
import { GitHubStateContext } from '../common/context/GitHubContext';
import IssueItem from '../component/Issue/IssueItem';
import Ad from '../component/Ad/Ad';
import Loading from '../component/Loading/Loading';
import useInfiniteScroll from '../common/hook/useInfiniteScroll';

const Issues = () => {
  const { loading, error, issues } = useContext(GitHubStateContext);
  const { fetchInit, fetchIssues } = useGithubAPI('facebook', 'react');
  const { target } = useInfiniteScroll(fetchIssues);
  useEffect(() => {
    fetchInit();
    fetchIssues();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      {issues.map((issue, idx) => (
        <Fragment key={issue.id}>
          <IssueItem issue={issue} />
          {(idx + 1) % 4 === 0 && <Ad />}
        </Fragment>
      ))}
      {loading ? <Loading /> : undefined}
      <div ref={target}></div>
    </>
  );
};

export default Issues;
