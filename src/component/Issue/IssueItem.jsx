import React from 'react';
import { useNavigate } from 'react-router-dom';

const IssueItem = ({ issue }) => {
  const navigate = useNavigate();

  const handleIssueClick = () => {
    navigate(`${issue.number}`, { state: { ...issue } });
  };

  return <div onClick={handleIssueClick}>{issue.title}</div>;
};

export default IssueItem;
