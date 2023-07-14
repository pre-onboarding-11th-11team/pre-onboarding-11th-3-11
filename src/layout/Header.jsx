import { useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import { GitHubStateContext } from '../common/context/GitHubContext';
import useGithubAPI from '../common/hook/useGitHubAPI';
import Error from '../page/Error';

const Header = () => {
  const { error, repository } = useContext(GitHubStateContext);
  const { fetchRepository } = useGithubAPI('facebook', 'react');

  useEffect(() => {
    fetchRepository();
  }, []);

  if (error) {
    return <Error />;
  }

  return <HeaderWrapper>{repository?.full_name}</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 24px;
`;
