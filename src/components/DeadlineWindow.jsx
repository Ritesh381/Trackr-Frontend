import React, { useState, useEffect, useRef } from "react";

function DeadlineWindow() {
  const [deadlines, setDeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 5;

  const fetchDeadlines = async () => {
    setLoading(true);
    const response = await fetch(`jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${skip}`);
    const data = await response.json();
    setLoading(false);
    if (data.length === 0) {
      setHasMore(false);
      return;
    }
    setDeadlines(prev => [...prev, ...data]);
    setSkip(prev => prev + limit);
  };

  useEffect(() => {
    fetchDeadlines();
  }, []);

  return (
    <div className="flex justify-end p-4 md:p-8 lg:p-20">
        <div
        className="w-full overflow-auto p-4"
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
