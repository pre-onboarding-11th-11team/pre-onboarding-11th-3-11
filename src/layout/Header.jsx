import { useContext, useEffect } from 'react';
import { styled } from 'styled-components';
import { GitHubStateContext } from '../common/context/GitHubContext';
import useGithubAPI from '../common/hook/useGitHubAPI';
import Loading from '../component/Loading/Loading';

const Header = () => {
  const { loading, error, repository } = useContext(GitHubStateContext);
  const { fetchRepository } = useGithubAPI('facebook', 'react');

  useEffect(() => {
    fetchRepository();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>error:{error}</div>;
  }

  if (!repository) {
    return <div>404</div>;
  }

  return <HeaderWrapper>{repository.full_name}</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 24px;
`;
