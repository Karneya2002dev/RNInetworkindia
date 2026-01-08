import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AvailabilityPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // For programmatic navigation

  return (
    <div className="pt-24 pb-10 px-4">
      {/* Back */}
      <button
        onClick={() => navigate(-1)} // Go back
        className="inline-flex items-center gap-2 text-blue-600 font-medium mb-6"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <h2 className="text-3xl font-bold mb-5">Availability</h2>

      <div className="digital-layout-embed-container w-full p-2 flex justify-center">
        <iframe
          style={{ width: "90vw", height: "100vh", borderRadius: "12px" }}
          src={`https://realestatesnetworkindiapvtltd.com/projects/plot-availability/${id}?embed=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
