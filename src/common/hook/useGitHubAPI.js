import { useContext } from 'react';

import {
  GitHubDispatchContext,
  GitHubStateContext,
} from '../context/GitHubContext';
import { githubAPI } from '../api';

const useGithubAPI = (owner, repo) => {
  const state = useContext(GitHubStateContext);
  const dispatch = useContext(GitHubDispatchContext);

  if (dispatch === undefined) throw new Error('error');

  const fetchRepository = async () => {
    try {
      const repositoryResponse = await githubAPI.get(`/repos/${owner}/${repo}`);

      dispatch({
        type: 'FETCH_REPO_SUCCESS',
        payload: repositoryResponse.data,
      });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error });
    }
  };

  const fetchIssues = async () => {
    try {
      const issuesResponse = await githubAPI.get(
        `/repos/${owner}/${repo}/issues?sort=comments&page=${state.page}&per_page=10`,
      );

      dispatch({
        type: 'FETCH_ISSUES_SUCCESS',
        payload: issuesResponse.data,
      });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error });
    }
  };

  return { fetchRepository, fetchIssues };
};

export default useGithubAPI;
