import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';

const IssueItem = ({ issue }) => {
  const navigate = useNavigate();

  const handleIssueClick = () => {
    navigate(`${issue.number}`, { state: { ...issue } });
  };

  return (
    <IssueItemWrapper>
      <IssueItemHeader>
        <IssueItemTitle onClick={() => handleIssueClick}>
          #{issue.number} {issue.title}
        </IssueItemTitle>
        <IssueItemInfo>코멘트:{issue.comments}</IssueItemInfo>
      </IssueItemHeader>
      <IssueItemInfo>
        작성자:{issue.user.login}, 작성일:{issue.created_at}
      </IssueItemInfo>
    </IssueItemWrapper>
  );
};

export default IssueItem;

const IssueItemWrapper = styled.div`
  width: inherit;
  padding: 12px 24px;
`;

const IssueItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
`;

const IssueItemTitle = styled.div`
  font-size: 24px;
  font-weight: bold;

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;

      &:hover {
        color: var(--blue-color);
      }
    `}
`;

const IssueItemInfo = styled.div`
  font-size: 16px;
`;
