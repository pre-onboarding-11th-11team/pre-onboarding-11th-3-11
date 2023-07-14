import React, { Fragment, useContext } from 'react';
import useGithubAPI from '../common/hook/useGitHubAPI';
import { GitHubStateContext } from '../common/context/GitHubContext';
import IssueItem from '../component/Issue/IssueItem';
import Ad from '../component/Ad/Ad';
import Loading from '../component/Loading/Loading';
import useInfiniteScroll from '../common/hook/useInfiniteScroll';
import Error from './Error';

const Issues = () => {
  const { loading, error, issues } = useContext(GitHubStateContext);
  const { fetchIssues } = useGithubAPI('facebook', 'react');
  const { target } = useInfiniteScroll(fetchIssues);

  if (error) return <Error />;

  return (
    <>
      {issues.map((issue, idx) => (
        <Fragment key={issue.id}>
          <IssueItem issue={issue} />
          {(idx + 1) % 4 === 0 && <Ad />}
        </Fragment>
      ))}
      {loading ? <Loading /> : <div ref={target}></div>}
    </>
  );
};

export default Issues;
