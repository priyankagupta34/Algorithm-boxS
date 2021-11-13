import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

export default function AlgoImgModel() {
  const dispatch = useDispatch();

  const model_src = useSelector((state) => state.model_src);
  const model_open = useSelector((state) => state.model_open);

  if (!model_open) return null;
  return ReactDOM.createPortal(
    <div
      className="model"
      onClick={() => dispatch({ type: "MODEL_OPEN", payload: "" })}
    >
      {/* <span onClick={() => dispatch({ type: "MODEL_OPEN", payload: "" })}>
        X
      </span> */}
      <div className="vimodel">
        <img
          className="imgM"
          src={model_src}
          alt="Algo"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="cgh">Click Anywhere (other than image) to close</div>
      </div>
    </div>,
    document.body
  );
}
