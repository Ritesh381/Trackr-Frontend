import React, { useEffect, useState } from "react";
import supabase from "../assets/supabase";

function DeadlineWindow() {
  const [deadlines, setDeadlines] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // tracks expanded deadline

  useEffect(() => {
    const fetchDeadlines = async () => {
      const { data, error } = await supabase
        .from("Deadlines")
        .select("*")
        .order("Due_Date", { ascending: true });

      if (error) {
        console.error("Error fetching deadlines:", error);
      } else {
        setDeadlines(data);
      }
    };

    fetchDeadlines();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-700 m-5 drop-shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Upcoming Deadlines
        </h1>
      </div>
      <div className="flex flex-col items-center p-6 space-y-6 min-h-[80vh]">
        <div className="w-full max-w-2xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">📅 Deadlines</h2>
          {deadlines.length > 0 ? (
            <ul className="space-y-3">
              {deadlines.map((deadline) => {
                const isExpanded = expandedId === deadline.DId;
                return (
                  <li
                    key={deadline.DId}
                    onClick={() => toggleExpand(deadline.DId)}
                    className={`p-3 border border-blue-400 rounded-xl transition-all duration-300 cursor-pointer ${
                      isExpanded ? "bg-blue-50 border-blue-600" : "hover:bg-blue-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700 font-medium">
                        {deadline.Task}{" "}
                        <span className="text-sm text-gray-600">({deadline.Type})</span>
                      </span>
                      <span className="text-sm text-blue-600">
                        {new Date(deadline.Due_Date).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="mt-3 text-sm text-gray-700 space-y-1">
                        {deadline.College_names && (
                          <div><strong>College:</strong> {deadline.College_names}</div>
                        )}
                        <div>
                          <strong>Start Date:</strong> {new Date(deadline.Due_Date).toLocaleDateString()}
                        </div>
                        <div>
                          <strong>End Date:</strong>{" "}
                          {deadline.End_Date ? new Date(deadline.End_Date).toLocaleDateString() : "N/A"}
                        </div>
                        {deadline.Notes && (
                          <div><strong>Notes:</strong> {deadline.Notes}</div>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-600">No upcoming deadlines.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeadlineWindow;
