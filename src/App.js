import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Algo from "./js/Algo";
import AlgoImgModel from "./js/AlgoImgModel";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  const model_open = useSelector((state) => state.model_open);
  useEffect(() => {
    axios
      .get("json/algo.json")
      .then((res) => {
        dispatch({ type: "ALLDEFS", payload: res.data });
      })
      .catch((er) => {});
  });

  useEffect(() => {
    if (model_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [model_open]);

  return (
    <div
      className="App"
      style={{ overflowY: model_open ? "hidden" : "scroll" }}
    >
      <AlgoImgModel />
      <div className="divg">
        Let's Dive in the beautiful world of algorithms
      </div>
      <a
        className="inlk"
        href="https://www.linkedin.com/in/priancaa/"
        rel="noreferrer"
        target="_blank"
      >
        in
      </a>
      <Algo />
    </div>
  );
}
