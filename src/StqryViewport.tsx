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
  const width = 4672;
  const height = 3104;

  const imageProps = {
    src: "https://sot-2022-tech-test-example.netlify.app/sharp_mountain_ridges.jpeg",
    alt: "Sharp mountain ridges",
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
