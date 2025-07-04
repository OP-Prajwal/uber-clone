import React from 'react';
import logo from '../images/logo.png';
import mapImage from '../images/map.jpg';

const Riding = () => {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={mapImage}
        alt="Map"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white p-4 rounded-t-lg shadow-md flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center">
          <img src={logo} alt="Car" className="w-16 h-16" />
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">KA 01 AB 1234</p>
            <p>TOYOTA</p>
            <p className="text-gray-600">Rating: 4.8 ★</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 ml-3 mt-4"> {/* New div for address and price */}
          <div>
            <p className="font-semibold">Dummy Address, Some City</p> {/* Replace with actual address */}
          </div>
          <div>
            <p className="font-semibold text-lg">$25.00</p> {/* Replace with actual price */}
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
