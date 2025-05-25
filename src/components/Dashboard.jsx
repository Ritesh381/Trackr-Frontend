import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/Login';
import { Link } from 'react-router-dom';
import supabase from '../assets/supabase';

const dummyColleges = [
  { id: 1, name: 'Stanford University' },
  { id: 2, name: 'MIT' },
  { id: 3, name: 'Harvard University' },
];

function Dashboard() {
  const { isLoggedIn, Id} = useContext(LoginContext);
  const [deadlines, setDeadlines] = useState([]);
  const [starredDeadlines, setStarredDeadlines] = useState([]);
  const [colleges, setColleges] = useState([]); 

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        Please log in to access the dashboard.
        <Link to="/login" className="text-blue-500 underline mt-2">
          Login
        </Link>
      </div>
    );
  }

  useEffect(() => {
    const fetchDeadlines = async () => {
      try {
        const { data, error } = await supabase
          .from('Users')
          .select('deadline_id')
          .eq('id', Id);

        if (error) {
          console.error('Error fetching deadlines:', error);
        } else {
          console.log('Fetched deadlines:', data[0].deadline_id);
          setStarredDeadlines(data[0].deadline_id);
        }
      } catch (err) {
        console.error('Unexpected error fetching deadlines:', err);
      }
    };

    fetchDeadlines();
  },[Id]);

  useEffect(() => {
    const fetchDeadlines = async () => {
    const { data: deadlinesData, error: deadlinesError } = await supabase
      .from("Deadlines")
      .select("*")
      .order("Due_Date", { ascending: true });

    if (deadlinesError) {
      console.error("Error fetching deadlines:", deadlinesError);
    } else {
      setDeadlines(deadlinesData);
      console.log("Deadlines fetched successfully:", deadlinesData);
    }
  };

  fetchDeadlines();
  }
  , [Id]);

  useEffect(() => {
    const fetchColleges = async () => {
      const { data, error } = await supabase
        .from("Colleges")
        .select("*")

      if (error) {
        console.error("Error fetching colleges:", error);
      } else {
        console.log("Colleges fetched:", data);
        setColleges(data);
      }
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    const fetchStarredColleges = async () => {
      try {
        const { data, error } = await supabase
          .from('Users')
          .select('college_id')
          .eq('id', Id);

        if (error) {
          console.error('Error fetching starred colleges:', error);
        } else {
          console.log('Starred colleges fetched:', data);
          setStarredDeadlines(data[0].starred_colleges || []);
        }
      } catch (err) {
        console.error('Unexpected error fetching starred colleges:', err);
      }
    };

    fetchStarredColleges();
  }
  , [Id]);


  return (
    <div className="flex p-6 space-x-6 min-h-[80vh]">
  {/* Left Side - Starred Colleges */}
  <div className="w-1/2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-2xl font-semibold text-blue-700 mb-6">⭐ Starred Colleges</h2>
    {dummyColleges.length > 0 ? (
      <ul className="space-y-3">
        {dummyColleges.map((college) => (
          <li
            key={college.id}
            className="p-3 border border-blue-400 rounded-xl hover:bg-blue-100 hover:border-blue-600 cursor-pointer transition duration-200"
          >
            <span className="text-blue-700 font-medium">{college.name}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">No colleges starred yet.</p>
    )}
  </div>

  {/* Right Side - Deadlines */}
  <div className="w-1/2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-2xl font-semibold text-blue-700 mb-6">📅 Upcoming Deadlines</h2>
    {deadlines.length > 0 ? (
      <ul className="space-y-3">
        {deadlines
  .filter((deadline) => starredDeadlines.includes(deadline.DId))
  .map((deadline) => (
    <li
      key={deadline.DId}
      className="p-3 border border-blue-400 rounded-xl flex justify-between items-center hover:bg-blue-100 hover:border-blue-600 transition duration-200"
    >
      <span className="text-blue-700 font-medium">{deadline.Task}</span>
      <span className="text-sm text-blue-600">{deadline.Due_Date}</span>
    </li>
))}

      </ul>
    ) : (
      <p className="text-gray-600">No upcoming deadlines.</p>
    )}
  </div>
</div>

  );
}

export default Dashboard;
