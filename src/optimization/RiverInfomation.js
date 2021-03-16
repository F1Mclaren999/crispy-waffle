import React, { useState, useEffect, Suspense, useMemo } from "react";
import getRiverInformation from "./Rivers";

export default function Rivers({ river }) {
  const [riverInfo, setRiverInfo] = useState({});

  const renderRiverInformation = (river) => {
    const info = getRiverInformation(river).then((data) => {
      console.log("data from getRiverInformation...", data);
      return data;
    });
    return info;
  };

  //   const infoRender = useMemo(() => renderRiverInformation(river), [river]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      renderRiverInformation(river).then((data) => {
        setRiverInfo(data);
      });
    }

    return () => {
      mounted = false;
    };
  }, [river]);

  return (
    <>
      <Suspense
        fallback={
          <div style={{ backgroundColor: "black" }}>
            Loading...River Information Data.......
          </div>
        }
      >
        {"continent" in riverInfo && (
          <div>
            <h2>River Information</h2>
            <p>
              This river is present in continent {riverInfo.continent}. The
              lenght of the river is {riverInfo.length}. River outfow is
              happening in
              {riverInfo.outflow}
            </p>
          </div>
        )}
      </Suspense>
    </>
  );
}
