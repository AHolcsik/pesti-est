import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addHappening } from "../../features/happening/happeningSlice";

const Happening = () => {
  const [newHappening, setNewHappening] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Add the name of the happening</h3>
      <div>
        <input
          onChange={(e) => {
            setNewHappening(e.target.value);
          }}
        />
        <button onClick={() => dispatch(addHappening(newHappening))}>
          Add happening
        </button>
      </div>
    </div>
  );
};

export default Happening;
