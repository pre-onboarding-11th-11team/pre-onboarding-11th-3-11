import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import IssueItem from '../component/Issue/IssueItem';

const IssueDetail = () => {
  const { state: issue } = useLocation();

  return (
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
      <div style={{ padding: '12px 24px' }}>{issue.body}</div>
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
