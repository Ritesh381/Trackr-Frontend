import React, { useEffect } from "react";
import banner from "../assets/banner.jpg";
import StatsChart from "./StatsChart";
import AOS from "aos";
import { Link } from "react-router-dom";

function Landing() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[66vh] object-cover opacity-90 shadow-2xl"
      />
      
      <div className="w-full py-8 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <h1 className="text-3xl md:text-4xl text-blue-600 text-center font-extrabold mb-4 drop-shadow-lg">
          Welcome To Trackr
        </h1>
        <p className="text-xl md:text-2xl text-blue-900 text-center font-bold px-4 leading-snug drop-shadow-md">
          From entrance exams to enrollment — we've got you covered
        </p>
      </div>

      <div data-aos="fade-up" className="py-8 bg-gradient-to-b from-white to-blue-50">
        <div className="flex items-center mb-4 px-4">
          <span className="w-[6px] h-8 bg-gradient-to-b from-blue-500 to-blue-700 mr-3 rounded-full shadow-lg" />
          <h1 className="text-2xl md:text-4xl font-bold text-blue-500 animate-bounce drop-shadow-lg">
            Did You Know?
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
          <div className="max-w-2xl bg-white rounded-2xl shadow-2xl p-6 border border-blue-100">
            <p className="text-lg md:text-2xl text-blue-900 mb-4 text-justify leading-relaxed">
              Every year, over{" "}
              <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                5 lakh
              </span>{" "}
              students appear for A Group exams, and more than{" "}
              <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                3 lakh
              </span>{" "}
              for B Group exams.
            </p>
            <p className="text-lg md:text-2xl text-blue-800 text-justify leading-relaxed">
              But many students miss important deadlines due to a lack of organized tracking.{" "}
              <span className="font-semibold text-blue-600">Trackr is here to fix that.</span>
            </p>
          </div>

          <div className="w-full lg:w-[400px]">
            <StatsChart />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-white py-8 mt-8">
          <p className="text-xl md:text-3xl text-blue-900 font-bold text-center drop-shadow-md px-4">
            Explore the key features that help students stay organized and informed.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-4">
          {[
            "🎓 Find Your Perfect College Match — Tailored Just for Your Stream!",
            "📅 Stay Ahead — Get Notified Before Every Exam & Application Deadline!",
            "⚡ Apply in a Click — Let Autofill Handle the Boring Stuff!",
            "🔔 Never Miss a Beat — Get Instant College Announcements as They Drop!",
          ].map((text, i) => (
            <div
              key={i}
              className={`w-full sm:w-72 h-auto bg-gradient-to-br from-white to-${["blue", "green", "purple", "orange"][i]}-50 text-blue-800 font-semibold border-2 border-${["blue", "green", "purple", "orange"][i]}-200 rounded-2xl shadow-2xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-3xl`}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              {text}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center py-8 px-4">
          <Link to="/search" className="text-lg sm:text-xl text-white font-semibold bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl border-2 border-blue-300 transition-all hover:scale-105 hover:from-sky-600 hover:to-blue-700 hover:border-blue-400 w-full sm:w-[200px] h-[45px] text-center">
            Explore Colleges
          </Link>
          <Link to="deadline" className="text-lg sm:text-xl text-blue-700 font-semibold bg-gradient-to-r from-white to-blue-50 rounded-xl border-2 border-blue-300 transition-all hover:scale-105 hover:border-blue-400 w-full sm:w-[200px] h-[45px] text-center">
            Important Deadlines
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
