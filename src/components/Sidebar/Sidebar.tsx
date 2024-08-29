import React from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { venueState } from "../../../lib/features/venue/venueSlice";

export default function Sidebar() {
  const venues = useAppSelector((state: { venue: venueState }) => state.venue);
  const dispatch = useAppDispatch();

  console.log(venues);

  return (
    <div className="w-2/5">
      <h3>Sidebar</h3>
      {venues.isActive && <p>{venues.name}</p>}
    </div>
  );
}
