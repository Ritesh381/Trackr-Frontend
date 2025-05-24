import React, { useContext } from 'react';
import { LoginContext } from '../context/Login';
import { Link } from 'react-router-dom';

const dummyColleges = [
  { id: 1, name: 'Stanford University' },
  { id: 2, name: 'MIT' },
  { id: 3, name: 'Harvard University' },
];

const dummyDeadlines = [
  { id: 1, title: 'Apply for Fall 2025', date: '2025-06-30' },
  { id: 2, title: 'Scholarship Application', date: '2025-05-15' },
  { id: 3, title: 'Submit Transcripts', date: '2025-05-01' },
];

function Dashboard() {
  const { isLoggedIn, user } = useContext(LoginContext);

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
    {dummyDeadlines.length > 0 ? (
      <ul className="space-y-3">
        {dummyDeadlines.map((deadline) => (
          <li
            key={deadline.id}
            className="p-3 border border-blue-400 rounded-xl flex justify-between items-center hover:bg-blue-100 hover:border-blue-600 transition duration-200"
          >
            <span className="text-blue-700 font-medium">{deadline.title}</span>
            <span className="text-sm text-blue-600">{deadline.date}</span>
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
