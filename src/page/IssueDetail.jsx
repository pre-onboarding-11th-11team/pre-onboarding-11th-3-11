import React from 'react';
import { useLocation } from 'react-router-dom';

const IssueDetail = () => {
  const { state: issue } = useLocation();

  return <div>{issue.body}</div>;
};

export default IssueDetail;
