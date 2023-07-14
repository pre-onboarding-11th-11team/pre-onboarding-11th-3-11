import React from 'react';
import { useNavigate } from 'react-router-dom';

const IssueItem = ({ issue }) => {
  const navigate = useNavigate();

  const handleIssueClick = () => {
    navigate(`${issue.number}`, { state: { ...issue } });
  };

  return (
    <div>
      <div onClick={handleIssueClick}>
        <div>
          #{issue.number} {issue.title}
        </div>
        <div>코멘트:{issue.comments}</div>
      </div>
      <div>
        작성자:{issue.user.login}, 작성일:{issue.created_at}
      </div>
    </div>
  );
};

export default IssueItem;
