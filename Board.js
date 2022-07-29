import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick, jumpTo }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square value={squares[0]} handleClick={handleClick} jumpTo={jumpTo} />
          <Square value={squares[1]} handleClick={handleClick} jumpTo={jumpTo} />
          <Square value={squares[2]} handleClick={handleClick} jumpTo={jumpTo} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} handleClick={handleClick} jumpTo={jumpTo} />
          <Square value={squares[4]} handleClick={handleClick} jumpTo={jumpTo} />
          <Square value={squares[5]} handleClick={handleClick} jumpTo={jumpTo} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} handleClick={handleClick} jumpTo={jumpTo} />
          <Square value={squares[7]} handleClick={handleClick} jumpTo={jumpTo} />
          <Square value={squares[8]} handleClick={handleClick} jumpTo={jumpTo} />
        </div>
      </div>
    </div>
  );
}
