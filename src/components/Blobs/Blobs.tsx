import React from "react";
import blobOptions from "./BlobOptions";
import { placeItemsOnMatrix, getRandomValue } from "./utils";

const BLOBS_COUNT = 18;

export const Blob = ({
  id,
  color1,
  color2,
  top,
  left,
  i,
}: {
  id: string;
  top: number;
  left: number;
  color1: string;
  color2: string;
  i: number;
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    width={`${getRandomValue(12, 40)}%`}
    filter="blur(40px)"
    style={{
      opacity: 1,
      position: "absolute",
      top: `${top}%`,
      left: `${left}%`,
    }}
  >
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color1 }}></stop>
        <stop offset="40%" style={{ stopColor: color2 }}></stop>
      </linearGradient>
    </defs>
    <path id="blob" fill={`url(#${id})`}>
      <animate
        attributeName="d"
        dur={`${getRandomValue(4000, 10000)}ms`}
        repeatCount="indefinite"
        values={blobOptions[i % blobOptions.length]}
      ></animate>
    </path>
  </svg>
);

export const Blobs = () => {
  const items = placeItemsOnMatrix(BLOBS_COUNT);

  return (
    <>
      {items.map(({ x, y }, i) => (
        <Blob
          id={`${i}_blob`}
          color1="rgb(238, 205, 163)"
          color2="rgb(211,133,237)"
          key={i}
          top={x}
          left={y}
          i={i}
        />
      ))}
    </>
  );
};
