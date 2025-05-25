import React, { useEffect, useState } from "react";
import Card from "./Card";
import supabase from "../assets/supabase";

function Search() {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchColleges = async () => {
      const { data, error } = await supabase
        .from("Colleges")
        .select("*")
        // .order("name", { ascending: true });
      if (error) {
        console.error("Error fetching colleges:", error);
      } else {
        console.log("Colleges fetched:", data);
        setColleges(data);
      }
    };

    fetchColleges();
  }, []);
  return (
    <div className="flex-row bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-700 m-5 drop-shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Explore Colleges
        </h1>
      </div>
      <form className="flex gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search colleges..."
          className="p-4 w-200 border-2 border-blue-200 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400 bg-white hover:shadow-xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="flex m-5 flex-wrap gap-8 justify-center px-4">
        {
          colleges.length > 0 ? (
            colleges.filter((college) =>
              college.Institute.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((college) => (
              <Card college={college}/>
            ))
          ) : (
            <p className="text-gray-600">No colleges found.</p>
          )
        }
      </div>
    </div>
  );
}

export default Search;
