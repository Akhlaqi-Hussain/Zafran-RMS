import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-goldenBrown bg-opacity-30 text-white py-6">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Phone Section */}
        <div className="flex items-start">
          <FaPhoneAlt className="text-lg mr-4" />
          <div>
            <p className="font-bold">0 (093) 730 3038 12</p>
            <p className="text-sm">
              A river named Band-e-Amir river flows by their place and supplies.
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-lg mr-4" />
          <div>
            <p className="font-bold">Band-e-Amir</p>
            <p className="text-sm">lake. Bamyan, central, Afghanistan.</p>
          </div>
        </div>

        {/* Hours Section */}
        <div className="flex items-start">
          <FaClock className="text-lg mr-4" />
          <div>
            <p className="font-bold">Open Saturday-Friday</p>
            <p className="text-sm">8:00am - 9:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
