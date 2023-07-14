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
        <>
          <IssueItem key={idx} issue={issue} />
          {(idx + 1) % 4 === 0 && <Ad />}
        </>
      ))}
      {loading ? <Loading /> : undefined}
    </>
  );
};

// import useInfiniteScroll from './useInfiniteScroll';

// function IssueList() {
//   const { page, target } = useInfiniteScroll();

//   return (
//     <div>
//       {/* ... */}
//       <div ref={target}>무한스크롤 트리거 요소</div>
//     </div>
//   );
// }

export default Issues;
