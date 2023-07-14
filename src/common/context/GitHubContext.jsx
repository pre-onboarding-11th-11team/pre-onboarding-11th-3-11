import { createContext, useReducer } from 'react';

export const defaultGitHubState = {
  repository: null,
  page: 1,
  issues: [],
  loading: true,
  error: null,
};

export const gitHubReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REPO_SUCCESS':
      return {
        ...state,
        repository: action.payload,
        loading: false,
      };
    case 'FETCH_ISSUES_SUCCESS':
      return {
        ...state,
        issues: [...state.issues, ...action.payload],
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
