import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const target = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage((prevPageNumber) => prevPageNumber + 1);
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
  }, [target]);

  return { page, target };
};

export default useInfiniteScroll;
