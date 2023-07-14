import { createContext, useReducer } from 'react';
import formatDate from '../../util/formatDate';

export const defaultGitHubState = {
  repository: null,
  page: 1,
  issues: [],
  loading: false,
  error: null,
};

const formatIssue = (issue) => ({
  ...issue,
  created_at: formatDate(issue.created_at),
});

const formatIssues = (issues) => issues.map(formatIssue);

export const gitHubReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_REPO_SUCCESS':
      return {
        ...state,
        repository: action.payload,
        loading: false,
      };
    case 'FETCH_ISSUES_SUCCESS':
      return {
        ...state,
        issues: [...state.issues, ...formatIssues(action.payload)],
        loading: false,
        page: state.page + 1,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type.`);
  }
};

export const GitHubStateContext = createContext(defaultGitHubState);

export const GitHubDispatchContext = createContext(undefined);

export const GitHubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gitHubReducer, defaultGitHubState);

  return (
    <GitHubStateContext.Provider value={state}>
      <GitHubDispatchContext.Provider value={dispatch}>
        {children}
      </GitHubDispatchContext.Provider>
    </GitHubStateContext.Provider>
  );
};
