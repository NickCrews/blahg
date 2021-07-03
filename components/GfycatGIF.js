const GfycatGIF = ({ src, size }) => {
  size = size || '80%';
  return (
    <video
      src={src}
      preload="auto"
      autoPlay={true}
      muted={true}
      loop={true}
      style={{ width: size, height: size, margin: 'auto' }}
    />
  );
};

export default GfycatGIF;
