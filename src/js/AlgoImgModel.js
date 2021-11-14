import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

export default function AlgoImgModel() {
  const dispatch = useDispatch();

  const model_src = useSelector((state) => state.model_src);
  const model_open = useSelector((state) => state.model_open);
  const rotate_img = useSelector((state) => state.rotate_img);

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
          style={{
            transform: `rotate(${rotate_img}deg)`,
            width: `${rotate_img === "90" ? "82vh" : "96vw"}`
          }}
          src={model_src}
          alt="Algo"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="cgh">
          <div className="flex">
            <div>Click Anywhere (other than image) to close</div>
            <span
              className="degf"
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "ROTATE_IMAGE" });
              }}
              style={{
                transform: `rotate(${rotate_img === "0" ? "90" : "0"}deg)`
              }}
            >
              &#8634;
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
