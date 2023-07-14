import { useContext, useEffect, useRef } from 'react';
import { GitHubStateContext } from '../context/GitHubContext';

const useInfiniteScroll = (fetchNextPage) => {
  const target = useRef(null);

  const { page } = useContext(GitHubStateContext);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
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
  }, [target, fetchNextPage]);

  return { page, target };
};

export default useInfiniteScroll;
