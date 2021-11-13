import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AlgoExplanationTemplate from "./AlgoExplanationTemplate";

export default function Algo() {
  const search = useSelector((state) => state.search);
  const allDefs = useSelector((state) => state.allDefs);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="targa">
        <input
          placeholder="Search Algorithm"
          className="voinp"
          value={search}
          onChange={(e) =>
            dispatch({ type: "SEARCH", payload: e.target.value })
          }
        />
      </div>
      {allDefs.map((algo, index) => (
        <AlgoExplanationTemplate key={algo.id} algo={algo} />
      ))}
      {search}
    </div>
  );
}
