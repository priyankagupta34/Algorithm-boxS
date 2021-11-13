import { useState } from "react";
import { useDispatch } from "react-redux";
import "./../algo.css";

export default function AlgoExplanationTemplate({ algo }) {
  const [openTemplate, setOpenTemplate] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="name" onClick={(e) => setOpenTemplate(!openTemplate)}>
        <span>{algo.name}</span>
        <span className={`spnh ${openTemplate ? "spin" : ""}`}>&#8634;</span>
      </div>

      {openTemplate && (
        <div className="vok">
          {algo.description.map((desc, index) => (
            <div className="vokD" key={index}>
              {desc.info} &nbsp;
              {desc.link.length !== 0 && (
                <a
                  className="aGre"
                  target="_blank"
                  rel="noreferrer"
                  href={desc.link[0].href}
                >
                  {desc.link[0].title}
                </a>
              )}
              {desc.img.length !== 0 && (
                <img
                  onClick={() =>
                    dispatch({
                      type: "MODEL_OPEN",
                      payload: desc.img[0]
                    })
                  }
                  className="desrim"
                  src={desc.img[0]}
                  alt="helper"
                />
              )}
            </div>
          ))}

          {algo.mainImg && (
            <>
              <img
                onClick={() =>
                  dispatch({
                    type: "MODEL_OPEN",
                    payload: algo.mainImg
                  })
                }
                src={algo.mainImg}
                className="imgA"
                alt="Algorithm Function"
              />
            </>
          )}
          <div className="imgbox">
            {algo.imgs.map((img, index) => (
              <img
                onClick={() =>
                  dispatch({
                    type: "MODEL_OPEN",
                    payload: img
                  })
                }
                key={index}
                src={img}
                className="imgV"
                alt="Algorithm Function"
              />
            ))}
          </div>
          <div className="coms">
            <span className="vsg">Time Complexity &nbsp;</span>
            {algo.complexity}
          </div>
        </div>
      )}
    </div>
  );
}
