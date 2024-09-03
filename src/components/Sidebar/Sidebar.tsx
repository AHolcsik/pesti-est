import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import { venueState } from "../../../lib/features/venue/venueSlice";

export default function Sidebar() {
  const venues = useAppSelector((state: { venue: venueState }) => state.venue);

  console.log(venues);
  return (
    <div className="w-2/5">
      <h3>Sidebar</h3>
      {venues.isActive && <p>Welcome to {venues.properties.name}!</p>}
    </div>
  );
}
