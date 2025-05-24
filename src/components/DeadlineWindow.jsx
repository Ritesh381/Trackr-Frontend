import React, { useState, useEffect, useRef } from "react";

function DeadlineWindow() {
  const [deadlines, setDeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 5;
  const scrollContainerRef = useRef(null);
  const autoscrollIntervalRef = useRef(null);
  const userActiveRef = useRef(false);

  const fetchDeadlines = async () => {
    setLoading(true);
    const response = await fetch(`/api/deadlines?skip=${skip}&limit=${limit}`);
    const data = await response.json();
    setLoading(false);
    if (data.length === 0) {
      setHasMore(false);
      return;
    }
    setDeadlines(prev => [...prev, ...data]);
    setSkip(prev => prev + limit);
  };

  const startAutoscroll = () => {
    if (autoscrollIntervalRef.current) clearInterval(autoscrollIntervalRef.current);
    autoscrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current && !userActiveRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        if (scrollTop + clientHeight < scrollHeight) {
          scrollContainerRef.current.scrollTop += 1; 
        } else if (hasMore && !loading) {
          fetchDeadlines();
        }
      }
    }, 100); 
  };

  const handleUserScroll = () => {
    userActiveRef.current = true;
    clearInterval(autoscrollIntervalRef.current);
    setTimeout(() => {
      userActiveRef.current = false;
      startAutoscroll();
    }, 5000);
  };

  useEffect(() => {
    fetchDeadlines();
    startAutoscroll();
    return () => {
      clearInterval(autoscrollIntervalRef.current);
    };
  }, []);

  return (
    <div className="flex justify-end p-20">
        <div
        ref={scrollContainerRef}
        onScroll={handleUserScroll}
        className="h-120 w-140 overflow-auto border-2 border-gray-300 p-4"
        >
        {deadlines.map((deadline, index) => (
            <div key={index} className="mb-4">
            <strong>{deadline.title}</strong>
            <p>{new Date(deadline.dueDate).toDateString()}</p>
            </div>
        ))}
        {loading && <p>Loading more deadlines...</p>}
        {!hasMore && <p>No more deadlines.</p>}
        </div>
    </div>
  );
}

export default DeadlineWindow;
