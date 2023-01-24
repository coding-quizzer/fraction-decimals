import Carousel from "../components/reusables/Carousel";

export default {
  title: "Carousel",
  component: Carousel,
};

const aspectRatio = "2 / 3";
const padding = 5;
const minHeight = 75;

export const Default = () => (
  <Carousel>
    <div>
      <div style={{ padding }}>
        <div
          style={{
            width: "100%",
            minHeight,
            aspectRatio,
            backgroundColor: "red",
          }}
        />
      </div>
    </div>

    <div>
      <div style={{ padding }}>
        <div
          style={{
            width: "100%",
            minHeight,
            aspectRatio: aspectRatio,
            backgroundColor: "yellow",
          }}
        />
      </div>
    </div>

    <div>
      <div style={{ padding }}>
        <div
          style={{
            minHeight,
            width: "100%",
            aspectRatio: aspectRatio,
            backgroundColor: "blue",
          }}
        />
      </div>
    </div>

    <div>
      <div style={{ padding }}>
        <div>
          <div style={{ padding }}>
            <div
              style={{
                width: "100%",
                minHeight,
                aspectRatio,
                backgroundColor: "red",
              }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding }}>
            <div
              style={{
                width: "100%",
                minHeight,
                aspectRatio: aspectRatio,
                backgroundColor: "yellow",
              }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding }}>
            <div
              style={{
                minHeight,
                width: "100%",
                aspectRatio: aspectRatio,
                backgroundColor: "blue",
              }}
            />
          </div>
        </div>

        <div>
          <div style={{ padding }}>
            <div
              style={{
                width: "100%",
                minHeight,
                aspectRatio: aspectRatio,
                backgroundColor: "orange",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </Carousel>
);
