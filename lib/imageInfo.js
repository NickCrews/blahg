import sizeOf from 'image-size';

export default function imageInfo(src) {
  const dimensions = sizeOf(`${process.cwd()}/public${src}`);
  return { src: src, width: dimensions.width, height: dimensions.height };
}
