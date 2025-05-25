import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import supabase from "../assets/supabase";
import { LoginContext } from "../context/Login";

function Card({ college }) {
  const navigate = useNavigate();
  const { Id: userId } = useContext(LoginContext);
  const [starred, setStarred] = useState([]);

  const nav = () => {
    navigate(`/info?${college.Institute}`, {
      state: { college },
    });
  };

  const toggleStar = async (id, e) => {
    e.stopPropagation();
    const isStarred = starred.includes(id);
    const updated = isStarred
      ? starred.filter((d) => d !== id)
      : [...starred, id];

    const { error } = await supabase
      .from("Users")
      .update({ college_id: updated }) // make sure this column holds an array in Supabase
      .eq("id", userId);

    if (!error) {
      setStarred(updated);
    } else {
      console.error("Error updating starred colleges:", error);
    }
  };

  useEffect(() => {
    if (!userId) {
      setStarred([]);
      return;
    }

    const fetchStarred = async () => {
      const { data, error } = await supabase
        .from("Users")
        .select("college_id")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching starred colleges:", error);
      } else {
        setStarred(data?.college_id || []);
      }
    };

    fetchStarred();
  }, [userId]);

  return (
    <div
      className="w-[250px] h-[300px] bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={nav}
    >
      <img
        src={college.College_Photo_URL}
        alt={college.Institute}
        className="w-full h-[160px] object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold text-blue-700 mb-1">
        {college.Institute}
      </h2>
      {userId && (
        <button
          onClick={(e) => toggleStar(college.CID, e)} // ✅ Correct key
          className={`text-lg ${
            starred.includes(college.CID) ? "text-yellow-500" : "text-gray-400"
          }`}
          title={starred.includes(college.CID) ? "Unstar" : "Star"}
        >
          {starred.includes(college.CID) ? "★" : "☆"}
        </button>
      )}
      <p className="text-sm text-gray-600">
        Median Placement:{" "}
        {college["Placement_(Median/High)"]
          ?.split("\n")[0]
          ?.replace("Median: ", "")}
      </p>
      <p className="text-blue-600">View Details</p>
    </div>
  );
}

export default Card;
