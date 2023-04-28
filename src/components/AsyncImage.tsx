import React, { useEffect } from "react";

interface AsyncImageType extends React.ComponentProps<"img"> {}

const AsyncImage: React.FC<AsyncImageType> = (props) => {
  const [loadedSrc, setLoadedSrc] = React.useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setLoadedSrc(undefined);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.addEventListener("progress", console.log);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);
  if (loadedSrc === props.src) {
    return <img {...props} />;
  }
  return null;
};

export default AsyncImage;
