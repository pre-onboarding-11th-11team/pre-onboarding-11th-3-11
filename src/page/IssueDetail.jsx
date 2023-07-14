import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Markdown from '../util/markdown';
import { GitHubStateContext } from '../common/context/GitHubContext';
import Loading from '../component/Loading/Loading';
import IssueItem from '../component/Issue/IssueItem';
import { styled } from 'styled-components';

const IssueDetail = () => {
  const { loading, error } = useContext(GitHubStateContext);
  const { state: issue } = useLocation();

  if (error) return <div>Error...</div>;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <IssueDetailHeader>
            <img
              src={issue.user.avatar_url}
              width="78px"
              height="78px"
              alt="profile"
            />
            <IssueItem issue={issue} />
          </IssueDetailHeader>
          <Markdown content={issue.body} />
        </>
      )}
    </>
  );
};

export default IssueDetail;

const IssueDetailHeader = styled.div`
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 48px);
`;
