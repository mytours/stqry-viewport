import { useViewport } from "./useViewport";

interface ImageProps {
  src: string;
  alt: string;
  viewportWidth: number;
  viewportHeight: number;
  width: number;
  height: number;
}

interface Props {
  renderProp: (props: ImageProps) => JSX.Element;
}

function StqryViewport(props: Props) {
  const { viewportHeight, viewportWidth } = useViewport();
  const width = 3506;
  const height = 2329;

  const imageProps = {
    src: "https://sot-2024-tech-test-example.pages.dev/mountain_sunset_solitude.jpg",
    alt: "Mountain sunset solitude",
    viewportWidth,
    viewportHeight,
    width,
    height,
  };

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {props.renderProp(imageProps)}
    </div>
  );
}

export default StqryViewport;
