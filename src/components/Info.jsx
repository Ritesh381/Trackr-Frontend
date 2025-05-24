import React from 'react'

function Info() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-sky-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <div className='border-blue-600 border-2 w-full h-[280px] bg-gradient-to-r from-blue-100 to-sky-200 flex items-center justify-center rounded-lg shadow-lg mb-6'>
          <span className="text-blue-600 text-2xl font-semibold">Image</span>
        </div>
        <div className='flex justify-center mb-8'>
          <p className='text-4xl font-bold text-blue-900 bg-white px-8 py-4 rounded-lg shadow-md border-l-4 border-blue-600'>
            Bits Pilani
          </p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Established Year</p>
              <p className='text-lg text-blue-700'>1964</p>
            </div>
            
            <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Location</p>
              <p className='text-lg text-blue-700'>Pilani</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Type</p>
              <p className='text-lg text-blue-700'>Private</p>
            </div>
            
            <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Rating</p>
              <p className='text-lg text-blue-700'>4.5/5 (Google), NIRF 26 Engg</p>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Main Courses</p>
              <p className='text-lg text-blue-700'>BTech (CSE, ECE, EEE, Mech, Civil, Chemical, Biotech, Pharma)</p>
            </div>
            
            <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Last Year Cutoff (Category-wise, CSE)</p>
              <p className='text-lg text-blue-700'>BITSAT Score: General: 300+, OBC/SC/ST: Not applicable</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className='text-xl font-semibold text-blue-900 mb-2'>Total Fees</p>
                <p className='text-lg text-blue-700'>₹5.7 Lakh/year</p>
              </div>
              
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className='text-xl font-semibold text-blue-900 mb-2'>Semester-Wise Fees</p>
                <p className='text-lg text-blue-700'>₹2.5 Lakh/sem</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className='text-xl font-semibold text-blue-900 mb-2'>Placement (Median)</p>
                <p className='text-lg text-blue-700'>₹14-15 Lakh</p>
              </div>
              
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className='text-xl font-semibold text-blue-900 mb-2'>Placement (Highest)</p>
                <p className='text-lg text-blue-700'>Up to ₹1 Crore+</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Placement Partners</p>
              <p className='text-lg text-blue-700'>Microsoft, Amazon, Google, Goldman Sachs, Qualcomm, Adobe, Oracle</p>
            </div>
            
            <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
              <p className='text-xl font-semibold text-blue-900 mb-2'>Contact</p>
              <p className='text-lg text-blue-700'>admission@pilani.bits-pilani.ac.in</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h1 className='text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-3'>
            Reviews By Students
          </h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className="bg-blue-50 p-5 rounded-lg shadow-md border border-blue-200">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Anonymous Student</p>
                  <p className="text-sm text-blue-600">CSE Graduate</p>
                </div>
              </div>
              <p className='text-blue-800 leading-relaxed'>
                "The overall experience with college is really good and I will definitely recommend it to others. Placements: More than 80% of students got placed. A lot of companies recruit students, including Microsoft, Google, Rubric, Dell, Deloitte, Oracle, Adobe, Nestle, etc. Top roles include software developer, analyst, app developer, product management, etc. The median package is 17 LPA. Core branches like electrical have an average salary of 18 LPA - 20 LPA."
              </p>
            </div>
            
            <div className="bg-sky-50 p-5 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Sarah M.</p>
                  <p className="text-sm text-sky-600">ECE Graduate</p>
                </div>
              </div>
              <p className='text-blue-800 leading-relaxed'>
                "BITS Pilani has excellent infrastructure and faculty. The campus life is vibrant with numerous clubs and activities. The academic rigor is high but prepares you well for industry challenges. The peer group is exceptional, and networking opportunities are abundant. Highly recommend for engineering aspirants."
              </p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg shadow-md border border-blue-200">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  R
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Rajesh K.</p>
                  <p className="text-sm text-blue-600">Mechanical Graduate</p>
                </div>
              </div>
              <p className='text-blue-800 leading-relaxed'>
                "The flexibility in course selection and no attendance policy makes BITS unique. Students are treated as adults and given responsibility. The campus has world-class facilities and the alumni network is very strong. Great place for holistic development beyond just academics."
              </p>
            </div>
            
            <div className="bg-sky-50 p-5 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  P
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Priya S.</p>
                  <p className="text-sm text-sky-600">Chemical Graduate</p>
                </div>
              </div>
              <p className='text-blue-800 leading-relaxed'>
                "Amazing research opportunities and industry exposure. The professors are highly qualified and approachable. The dual degree program is well-structured. Campus placements are excellent with top-tier companies visiting regularly. The entrepreneurial ecosystem is also very supportive."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info