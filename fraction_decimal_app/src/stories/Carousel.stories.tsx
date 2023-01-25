import Carousel from "../components/reusables/Carousel";

export default {
  title: "Carousel",
  component: Carousel,
};

const aspectRatio = "2 / 3";
const padding = 5;
// const minHeight = 75;
const height = 100;

export const Default = () => (
  <Carousel width={77.5}>
    <div style={{ padding, width: "fit-content" }}>
      <div
        style={{
          //width: "100%",
          height,
          aspectRatio,
          backgroundColor: "red",
        }}
      />
    </div>

    <div style={{ padding, width: "fit-content" }}>
      <div
        style={{
          //width: "100%",

          height,
          aspectRatio: aspectRatio,
          backgroundColor: "yellow",
        }}
      />
    </div>

    <div style={{ padding, width: "fit-content" }}>
      <div
        style={{
          height,
          //width: "100%",
          aspectRatio: aspectRatio,
          backgroundColor: "blue",
        }}
      />
    </div>

    <div style={{ padding, width: "fit-content" }}>
      <div
        style={{
          //width: "100%",
          height,
          aspectRatio,
          backgroundColor: "red",
        }}
      />
    </div>

    <div style={{ padding, width: "fit-content" }}>
      <div
        style={{
          //width: "100%",
          height,
          aspectRatio: aspectRatio,
          backgroundColor: "yellow",
        }}
      />
    </div>

    <div style={{ padding, width: "fit-content" }}>
      <div
        style={{
          height,
          // width: "100%",
          aspectRatio: aspectRatio,
          backgroundColor: "blue",
        }}
      />
    </div>

    <div style={{ padding, width: "fit-content" }}>
      <div
        style={{
          //width: "100%",
          height,
          aspectRatio: aspectRatio,
          backgroundColor: "orange",
        }}
      />
    </div>
  </Carousel>
);
