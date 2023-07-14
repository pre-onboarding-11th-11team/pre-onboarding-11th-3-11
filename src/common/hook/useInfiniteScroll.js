import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = () => {
  // page는 context로 관리한다고 했기 때문에 적용하실때 context로 page값 불러와서 적용해주세요
  const [page, setPage] = useState(1);

  const target = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // page는 context로 관리한다고 했기 때문에 적용하실때 context로 page값 불러와서 적용해주세요
        setPage((prevPageNumber) => prevPageNumber + 1);
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
