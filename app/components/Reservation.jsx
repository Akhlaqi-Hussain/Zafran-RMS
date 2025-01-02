import React from "react";

const Reservation = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-gray-900 text-white">
      {/* Left Side - Inspiring Message */}
      <div className="container lg:w-1/2 p-12 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            "Gather, Create & Share Memories."
          </h2>
          <p className="text-lg text-gray-300">
            Whether it's a celebration or a simple get-together, every moment
            shared around the table becomes a story worth cherishing. Reserve
            your table today and make your gathering truly special.
          </p>
        </div>
      </div>

      {/* Right Side - Reservation Form */}
      <div className="lg:w-1/2 bg-gray-900 p-12 flex items-center justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Book a Table</h2>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Date</label>
                <input
                  type="date"
                  className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Time</label>
                <input
                  type="time"
                  className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="p-3 bg-goldenBrown hover:bg-yellow-700 text-black font-bold w-full rounded-md"
            >
              Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
