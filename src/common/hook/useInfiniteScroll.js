import { useContext, useEffect, useRef } from 'react';
import { GitHubStateContext } from '../context/GitHubContext';
import useGithubAPI from './useGitHubAPI';

const useInfiniteScroll = () => {
  const target = useRef(null);

  const { page } = useContext(GitHubStateContext);
  const { fetchIssues } = useGithubAPI('facebook', 'react');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchIssues();
        }
      });
    }, options);
    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target, fetchIssues]);

  return { page, target };
};

export default useInfiniteScroll;
