import { useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchNextPage) => {
  const target = useRef(null);

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

  return { target };
};

export default useInfiniteScroll;
