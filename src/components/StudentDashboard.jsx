import React from 'react';
import { FaUserCircle, FaClipboardList, FaBell, FaFileAlt, FaLifeRing } from 'react-icons/fa';

export const StudentDashboard = () => {
  return (
    <div className="w-screen p-4 ml-4">
      <div className="columns-1 space-y-4 lg:columns-3">
        
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="h-[20vh] lg:h-[25vh] w-full rounded-xl border border-dashed border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-bold text-white flex items-center">
              <FaUserCircle className="mr-2" /> Profile Overview
            </h2>
            <p className="text-sm text-gray-300">
              View and update your profile information.
            </p>
          </div>
          <div className="h-[35vh] lg:h-[40vh] w-full rounded-xl border border-dashed border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-bold text-white flex items-center">
              <FaClipboardList className="mr-2" /> Application Status
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-300">Scholarship Application: <span className="text-green-500">Approved</span></li>
              <li className="text-gray-300">Document Verification: <span className="text-yellow-500">Pending</span></li>
              <li className="text-gray-300">Final Submission: <span className="text-red-500">Incomplete</span></li>
            </ul>
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="space-y-4">
          <div className="h-[35vh] lg:h-[40vh] w-full rounded-xl border border-dashed border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-bold text-white flex items-center">
              <FaBell className="mr-2" /> Important Notices
            </h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Deadline for submission: September 15, 2024</li>
              <li>New document format update</li>
              <li>Contact support for application queries</li>
            </ul>
          </div>
          <div className="h-[20vh] lg:h-[25vh] w-full rounded-xl border border-dashed border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-bold text-white flex items-center">
              <FaFileAlt className="mr-2" /> Resources
            </h2>
            <p className="text-sm text-gray-300">
              Access guidelines, FAQ, and support for your scholarship application.
            </p>
          </div>
        </div>
        
        {/* Column 3 */}
        <div className="space-y-4">
          <div className="h-[45vh] w-full rounded-xl border border-dashed border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-bold text-white flex items-center">
              <FaClipboardList className="mr-2" /> Application Progress
            </h2>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-gray-600">
                    75% Complete
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="h-[15vh] w-full rounded-xl border border-dashed border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-bold text-white flex items-center">
              <FaLifeRing className="mr-2" /> Help & Support
            </h2>
            <p className="text-sm text-gray-300">
              Get assistance with your application process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

