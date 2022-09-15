import { useEffect, useState } from "react";

export function useViewport() {
  const [viewportHeight, setViewportHeight] = useState(
    document.documentElement.clientHeight
  );
  const [viewportWidth, setViewportWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    function resize() {
      setViewportHeight(document.documentElement.clientHeight);
      setViewportWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  return { viewportHeight, viewportWidth };
}
