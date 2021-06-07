export const ArtCanvas = ({ background = "whitesmoke", ...props }) => (
  <div
    style={{
      background,
      border: "2px dashed gray",
      height: "80vh",
      position: "relative",
    }}
    {...props}
  />
);
