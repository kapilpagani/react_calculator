import React from "react";

export default function AllButtons({ handleClick }) {
  return (
    <>
      <div className="btns">
        <div className="row">
          <button className="btn" onClick={() => handleClick("CE")}>
            CE
          </button>
          <button className="btn" onClick={() => handleClick("(")}>
            (
          </button>
          <button className="btn" onClick={() => handleClick(")")}>
            )
          </button>
          <button className="btn" onClick={() => handleClick("%")}>
            %
          </button>
          <button className="btn" name="AC" onClick={(e) => handleClick(e)}>
            AC
          </button>
        </div>

        <div className="row">
          <button className="btn" name="sin" onClick={(e) => handleClick(e)}>
            sin
          </button>
          <button className="btn" name="7" onClick={(e) => handleClick(e)}>
            7
          </button>
          <button className="btn" name="8" onClick={(e) => handleClick(e)}>
            8
          </button>
          <button className="btn" name="9" onClick={(e) => handleClick(e)}>
            9
          </button>
          <button className="btn" name="÷" onClick={(e) => handleClick(e)}>
            /
          </button>
        </div>

        <div className="row">
          <button className="btn">cos</button>
          <button className="btn" name="4" onClick={(e) => handleClick(e)}>
            4
          </button>
          <button className="btn" name="5" onClick={(e) => handleClick(e)}>
            5
          </button>
          <button className="btn" name="6" onClick={(e) => handleClick(e)}>
            6
          </button>
          <button className="btn" name="x" onClick={(e) => handleClick(e)}>
            *
          </button>
        </div>

        <div className="row">
          <button className="btn">tan</button>
          <button className="btn" name="1" onClick={(e) => handleClick(e)}>
            1
          </button>
          <button className="btn" name="2" onClick={(e) => handleClick(e)}>
            2
          </button>
          <button className="btn" name="3" onClick={(e) => handleClick(e)}>
            3
          </button>
          <button className="btn" name="-" onClick={(e) => handleClick(e)}>
            -
          </button>
        </div>

        <div className="row">
          <button className="btn" name="1" onClick={(e) => handleClick(e)}>
            Undo
          </button>
          <button className="btn" name="0" onClick={(e) => handleClick(e)}>
            0
          </button>
          <button className="btn">.</button>
          <button className="btn" name="=" onClick={(e) => handleClick(e)}>
            =
          </button>
          <button className="btn" name="+" onClick={(e) => handleClick(e)}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
