export default ({
  altText,
  classes,
  fileName,
}: {
  altText: string;
  classes: string;
  fileName: string;
}) => {
  return (
    <img
      className={`lazyload ${classes}`}
      alt={altText}
      src={require(`../assets/images/${fileName}?webp`)}
      data-srcset={`${require(`../assets/images/${fileName}`)} 1x, ${require(`../assets/images/${fileName}`)} 2x`}
    />
  )
}
