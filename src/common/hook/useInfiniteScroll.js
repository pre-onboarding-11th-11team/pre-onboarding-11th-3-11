import { useContext, useEffect, useRef } from 'react';
import {
  GitHubDispatchContext,
  GitHubStateContext,
} from '../context/GitHubContext';

const useInfiniteScroll = () => {
  const { page } = useContext(GitHubStateContext);
  const dispatch = useContext(GitHubDispatchContext);

  const target = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch({ type: 'INCREMENT_PAGE' });
      }
    });
  }, options);

  useEffect(() => {
    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target]);

  return { page, target };
};

export default useInfiniteScroll;
