import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
import "leaflet/dist/leaflet.css";

// Fixing Leaflet default icon reference issues common in React bundles
import L from "leaflet";
import { useState } from "react";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Coverage = () => {
  const warehouses = useLoaderData() || [];
  const [searchQuery, setSearchQuery] = useState("");

  // Handles lookup matching either by district name or sub-areas array tags
  const filteredWarehouses = warehouses.filter((warehouse) => {
    const query = searchQuery.toLowerCase();
    const matchDistrict = warehouse.district?.toLowerCase().includes(query);
    const matchAreas = warehouse.covered_area?.some((area) =>
      area.toLowerCase().includes(query),
    );
    return matchDistrict || matchAreas;
  });

  return (
    <div className="w-[91%] max-w-7xl mx-auto py-12 font-urbanist flex flex-col items-center text-left">
      {/* PRIMARY HEADER SECTION */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D2C54] tracking-tight mb-6">
          We are available in 64 districts
        </h1>

        {/* SEARCH BAR INPUT LAYOUT */}
        <div className="w-full max-w-md bg-gray-100 rounded-full flex items-center p-1.5 border border-gray-200/60 transition-all focus-within:border-[#00A6ED]/50 focus-within:bg-white shadow-sm">
          <div className="pl-4 text-gray-400 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none pl-3 text-sm font-medium text-gray-700 placeholder-gray-400"
          />
          <button className="bg-[#bdf05d] hover:bg-[#a6d64c] text-[#0d2c54] font-bold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 select-none">
            Search
          </button>
        </div>
      </div>

      {/* MATRIX DIVIDER BOUNDARY RULE */}
      <hr className="border-gray-200/80 my-10" />

      {/* SECONDARY MAP SECTION CALLOUT */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2C54] tracking-tight text-left">
          We deliver almost all over Bangladesh
        </h2>
      </div>

      {/* MAP MOUNT CONTAINER CANVAS */}
      <div className="w-full rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative z-10">
        <MapContainer
          center={[23.777176, 90.399452]}
          zoom={7.5}
          scrollWheelZoom={false}
          className="w-full h-[55vh] md:h-[65vh]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredWarehouses.map((warehouse, idx) => (
            <Marker
              key={`${warehouse.district}-${idx}`}
              position={[warehouse.latitude, warehouse.longitude]}
            >
              <Popup>
                <div className="p-1 font-urbanist">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                    <h4 className="font-extrabold text-sm text-[#0D2C54] m-0">
                      {warehouse.district} Hub
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 m-0 leading-relaxed">
                    <strong className="text-gray-700">Covered Areas:</strong>{" "}
                    {warehouse.covered_area
                      ? warehouse.covered_area.join(", ")
                      : "N/A"}
                  </p>
                  <div className="mt-2 text-[10px] uppercase tracking-wider font-bold text-[#00A6ED]">
                    Status: {warehouse.status}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
