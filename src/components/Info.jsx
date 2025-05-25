import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();
  const { college } = location.state || {};

  if (!college) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-xl font-semibold">
        No data available.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
      <img
        src={college.College_Photo_URL}
        alt={college.Institute}
        className="w-full h-64 md:h-80 object-cover rounded-xl mb-6 shadow-md"
      />
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-wide">
        {college.Institute}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-gray-700">
        <div>
          <p className="mb-2">
            <span className="font-semibold text-gray-900">Location:</span>{" "}
            {college.Location}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-900">Type:</span>{" "}
            {college.Type}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-900">Established:</span>{" "}
            {college.Year_Established}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-900">Contact:</span>{" "}
            {college.Contact}
          </p>
        </div>
        <div>
          <p className="mb-2">
            <span className="font-semibold text-gray-900">Main Courses:</span>
            <br /> {college.Main_Courses}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-900">Rating:</span>{" "}
            {college["Rating_(Sample)"]}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 p-4 border-b border-gray-200 bg-gray-50">
          Cutoffs (SRMJEEE Rank Approx)
        </h2>
        <table className="min-w-full bg-white">
          <thead className="bg-blue-100 text-blue-900 font-semibold">
            <tr>
              <th className="text-left py-3 px-6 border-b border-gray-300">
                Branch
              </th>
              <th className="text-center py-3 px-6 border-b border-gray-300">
                General
              </th>
              <th className="text-center py-3 px-6 border-b border-gray-300">
                OBC
              </th>
              <th className="text-center py-3 px-6 border-b border-gray-300">
                SC
              </th>
              <th className="text-center py-3 px-6 border-b border-gray-300">
                ST
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="text-left py-3 px-6 border-b border-gray-200 font-medium">
                CSE
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                120-130
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                150-170
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                200-250
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                250-300
              </td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="text-left py-3 px-6 border-b border-gray-200 font-medium">
                ECE / IT
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                150-180
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                180-220
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                250-300
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                300-350
              </td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="text-left py-3 px-6 border-b border-gray-200 font-medium">
                Mech / Civil
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                200-250
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                250-300
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                350-400
              </td>
              <td className="text-center py-3 px-6 border-b border-gray-200">
                400+
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-xl mb-4 text-gray-900">
            Fees Details
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Fees (per semester): </span>
              {college["Semester-wise_Fees_(Coursewise)"]}
            </li>
            <li>
              <span className="font-semibold">Total Fees (per year): </span>
              {college["Total_Fees_(Coursewise)"]}
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-xl mb-4 text-gray-900">
            Placements
          </h3>
          <p className="text-gray-700 mb-2">
            {college["Placement_(Median/High)"]}
          </p>
          <p className="text-blue-700 font-medium">
            {college.Placement_Partners}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
