import React from 'react';

const Plan = () => {
  return (
    <div id='plan' className="bg-gray-100 py-12">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Choose a plan</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
            <p className="text-gray-600 mt-2">Suitable for light internet use.</p>
            <div className="mt-4">
              <p className="text-3xl font-semibold text-blue-600">KES.1,500/month</p>
              <p className="text-gray-600 text-sm">Billed annually</p>
            </div>
            <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-full hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Standard Plan</h2>
            <p className="text-gray-600 mt-2">Ideal for streaming and gaming.</p>
            <div className="mt-4">
              <p className="text-3xl font-semibold text-blue-600">KES.2,500/month</p>
              <p className="text-gray-600 text-sm">Billed annually</p>
            </div>
            <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-full hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Premium Plan</h2>
            <p className="text-gray-600 mt-2">For heavy internet users.</p>
            <div className="mt-4">
              <p className="text-3xl font-semibold text-blue-600">KES.5,000/month</p>
              <p className="text-gray-600 text-sm">Billed annually</p>
            </div>
            <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-full hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
