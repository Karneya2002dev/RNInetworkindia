import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapPin, Search, Filter, X, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";

const CHENNAI_CENTER = [13.0827, 80.2707];
const CHENNAI_ZOOM = 11;

/* ---------------- MAP CONTROLLER ---------------- */
const MapController = ({ properties }) => {
  const map = useMap();

  useEffect(() => {
    if (!properties.length) {
      map.flyTo(CHENNAI_CENTER, CHENNAI_ZOOM, { duration: 1.5 });
      return;
    }
    if (properties.length === 1) {
      map.flyTo([properties[0].lat, properties[0].lng], 14, { duration: 1.5 });
    } else {
      map.fitBounds(properties.map((p) => [p.lat, p.lng]), {
        padding: [50, 50],
        maxZoom: 14,
      });
    }
  }, [properties, map]);

  return null;
};

/* ---------------- MAIN COMPONENT ---------------- */
export default function PropertyListing() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [hoveredProperty, setHoveredProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const [localSearch, setLocalSearch] = useState(params.get("q") || "");
  const typeFilter = params.get("type") || "";
  const cityFilter = params.get("city") || "";
  const minPriceFilter = params.get("minPrice") || "";
  const maxPriceFilter = params.get("maxPrice") || "";
  const bedroomsFilter = params.get("bedrooms") || "";
  const bathroomsFilter = params.get("bathrooms") || "";

  /* ---------------- FETCH PROPERTIES ---------------- */
  useEffect(() => {
    fetch(`http://localhost:5000/api/properties`)
      .then((res) => res.json())
      .then((res) => {
        const normalized = (res?.data || [])
          .map((p) => {
            const lat = Number(p.lat);
            const lng = Number(p.lng);
            if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
            return { ...p, lat, lng };
          })
          .filter(Boolean);
        setProperties(normalized);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load properties", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- DERIVED DATA ---------------- */
  const cities = useMemo(() => [...new Set(properties.map((p) => p.city).filter(Boolean))], [properties]);
  const propertyTypes = useMemo(() => [...new Set(properties.map((p) => p.propertyType))], [properties]);
  const bedroomsOptions = useMemo(
    () => [...new Set(properties.map((p) => p.bedrooms).filter(Boolean))].sort((a, b) => a - b),
    [properties]
  );
  const bathroomsOptions = useMemo(
    () => [...new Set(properties.map((p) => p.bathrooms).filter(Boolean))].sort((a, b) => a - b),
    [properties]
  );

  /* ---------------- FILTERED PROPERTIES ---------------- */
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch =
        !localSearch || `${p.locality} ${p.city} ${p.developer}`.toLowerCase().includes(localSearch.toLowerCase());
      const matchesType = !typeFilter || p.propertyType === typeFilter;
      const matchesCity = !cityFilter || p.city === cityFilter;
      const matchesMinPrice = !minPriceFilter || (p.price && p.price >= Number(minPriceFilter));
      const matchesMaxPrice = !maxPriceFilter || (p.price && p.price <= Number(maxPriceFilter));
      const matchesBedrooms = !bedroomsFilter || p.bedrooms === Number(bedroomsFilter);
      const matchesBathrooms = !bathroomsFilter || p.bathrooms === Number(bathroomsFilter);

      return (
        matchesSearch &&
        matchesType &&
        matchesCity &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms &&
        matchesBathrooms
      );
    });
  }, [properties, localSearch, typeFilter, cityFilter, minPriceFilter, maxPriceFilter, bedroomsFilter, bathroomsFilter]);

  /* ---------------- HANDLERS ---------------- */
  const updateParams = (updates) => {
    const newParams = new URLSearchParams(params);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });
    setParams(newParams);
  };

  const resetFilters = () => {
    setParams({});
    setLocalSearch("");
    setShowFilters(false);
  };

  const goToProperty = (id) => {
    navigate(`/proper/${id}`);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden text-slate-900">
      {/* HEADER */}
      <header className="bg-white border-b px-6 py-3 flex gap-4 items-center z-30 shadow-sm">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={localSearch}
            onChange={(e) => {
              setLocalSearch(e.target.value);
              updateParams({ q: e.target.value });
            }}
            placeholder="Search by locality, city or developer..."
            className="w-full bg-slate-100 focus:bg-white border-transparent focus:border-blue-500 border-2 transition-all rounded-full py-2 pl-10 pr-4 outline-none"
          />
        </div>

        <button
          onClick={() => setShowFilters(true)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full transition-colors font-medium border
      ${(typeFilter || cityFilter || minPriceFilter || maxPriceFilter || bedroomsFilter || bathroomsFilter)
              ? "bg-blue-50 border-blue-200 text-blue-600"
              : "bg-white border-slate-200 hover:bg-slate-50"}`}
        >
          <Filter size={16} /> Filters{" "}
          {(typeFilter || cityFilter || minPriceFilter || maxPriceFilter || bedroomsFilter || bathroomsFilter) && (
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
          )}
        </button>
      </header>

      {/* FILTER DRAWER */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-xl">Filter Results</h3>
                <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6 flex-1 overflow-y-auto">
                {/* Property Type */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                    Property Type
                  </label>
                  <select
                    value={typeFilter}
                    onChange={(e) => updateParams({ type: e.target.value })}
                    className="w-full border-2 border-slate-100 rounded-xl p-3 outline-none focus:border-blue-500 transition-all appearance-none bg-slate-50"
                  >
                    <option value="">All Types</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">City</label>
                  <select
                    value={cityFilter}
                    onChange={(e) => updateParams({ city: e.target.value })}
                    className="w-full border-2 border-slate-100 rounded-xl p-3 outline-none focus:border-blue-500 transition-all appearance-none bg-slate-50"
                  >
                    <option value="">All Cities</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Min Price</label>
                    <input
                      type="number"
                      value={minPriceFilter}
                      onChange={(e) => updateParams({ minPrice: e.target.value })}
                      placeholder="₹ Min"
                      className="w-full border-2 border-slate-100 rounded-xl p-3 outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Max Price</label>
                    <input
                      type="number"
                      value={maxPriceFilter}
                      onChange={(e) => updateParams({ maxPrice: e.target.value })}
                      placeholder="₹ Max"
                      className="w-full border-2 border-slate-100 rounded-xl p-3 outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                    Bedrooms
                  </label>
                  <select
                    value={bedroomsFilter}
                    onChange={(e) => updateParams({ bedrooms: e.target.value })}
                    className="w-full border-2 border-slate-100 rounded-xl p-3 outline-none focus:border-blue-500 transition-all appearance-none bg-slate-50"
                  >
                    <option value="">Any</option>
                    {bedroomsOptions.map((b) => (
                      <option key={b} value={b}>
                        {b} BHK
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                    Bathrooms
                  </label>
                  <select
                    value={bathroomsFilter}
                    onChange={(e) => updateParams({ bathrooms: e.target.value })}
                    className="w-full border-2 border-slate-100 rounded-xl p-3 outline-none focus:border-blue-500 transition-all appearance-none bg-slate-50"
                  >
                    <option value="">Any</option>
                    {bathroomsOptions.map((b) => (
                      <option key={b} value={b}>
                        {b} Baths
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={resetFilters}
                className="mt-auto flex items-center justify-center gap-2 w-full py-4 text-slate-500 font-medium border-t"
              >
                <RotateCcw size={16} /> Reset All
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CONTENT */}
      <main className="flex flex-1 overflow-hidden">
        {/* LIST */}
        <div className="w-full md:w-[460px] overflow-y-auto p-4 space-y-4 bg-white border-r">
          <div className="flex justify-between items-end mb-2 px-1">
            <p className="text-sm text-slate-500 font-medium">
              Showing <span className="text-slate-900">{filteredProperties.length}</span> properties
            </p>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-slate-100 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : filteredProperties.length > 0 ? (
            filteredProperties.map((p) => (
              <motion.div
                key={p.id}
                layout
                onMouseEnter={() => setHoveredProperty(p.id)}
                onMouseLeave={() => setHoveredProperty(null)}
                onClick={() => goToProperty(p.id)}
                className={`group cursor-pointer bg-white rounded-2xl border transition-all hover:shadow-md 
                  ${hoveredProperty === p.id ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-200"}`}
              >
                <div className="flex h-32 p-2">
                  <img
                    src={p.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"}
                    alt={p.propertyType}
                    className="w-32 h-full rounded-xl object-cover"
                  />
                  <div className="p-3 flex-1 flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{p.propertyType}</span>
                    <h3 className="font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {p.developer}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <MapPin size={12} /> {p.locality}, {p.city}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      ₹ {p.price?.toLocaleString() || "On Request"} • {p.bedrooms} BHK • {p.bathrooms} Baths
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p>No properties match your filters.</p>
              <button onClick={resetFilters} className="text-blue-500 mt-2 font-medium">
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* MAP */}
        <div className="hidden md:block flex-1 relative">
          <MapContainer center={CHENNAI_CENTER} zoom={CHENNAI_ZOOM} className="h-full w-full z-10">
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
            <MapController properties={filteredProperties} />
            {filteredProperties.map((p) => (
              <CircleMarker
                key={p.id}
                center={[p.lat, p.lng]}
                radius={hoveredProperty === p.id ? 12 : 8}
                pathOptions={{
                  fillColor: hoveredProperty === p.id ? "#2563eb" : "#3b82f6",
                  color: "white",
                  weight: 2,
                  fillOpacity: 0.9,
                }}
                eventHandlers={{
                  click: () => goToProperty(p.id),
                }}
              >
                <Popup closeButton={false}>
                  <div className="p-1 font-sans">
                    <p className="font-bold text-sm m-0">{p.developer}</p>
                    <p className="text-xs text-slate-500 m-0">{p.propertyType}</p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </main>
    </div>
  );
}
