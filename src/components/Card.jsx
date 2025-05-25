import { useNavigate } from "react-router-dom";

function Card({ college }) {
  const navigate = useNavigate();

  function nav() {
    navigate("/info"+`? ${college.Institute}`, {
      state: { college: college },
    });
  }

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
      <p className="text-sm text-gray-600">
        Median Placement:{" "}
        {college["Placement_(Median/High)"]
          .split("\n")[0]
          .replace("Median: ", "")}
      </p>
      <p className="text-blue-600">View Details</p>
    </div>
  );
}

export default Card;
