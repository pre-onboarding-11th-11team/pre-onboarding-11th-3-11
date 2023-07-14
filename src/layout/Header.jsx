import { useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import { GitHubStateContext } from '../common/context/GitHubContext';
import useGithubAPI from '../common/hook/useGitHubAPI';

const Header = () => {
  const { loading, error, repository } = useContext(GitHubStateContext);
  const { fetchRepository } = useGithubAPI('facebook', 'react');

  useEffect(() => {
    fetchRepository();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error:{error}</div>;
  }

  if (!repository) {
    return <div>404</div>;
  }

  return <HeaderStyle>{repository.full_name}</HeaderStyle>;
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
`;

export default Header;
