interface SvgProps {
  svgUrl: string;
  color: string;
  size: number
}

export default function Svg({ svgUrl, color, size }: SvgProps) {
  return (
    <div
      className="aspect-square"
      style={{
        maskImage: `url(${svgUrl})`,
        WebkitMaskImage: `url(${svgUrl})`,
        maskSize: "contain",
        backgroundColor: color,
        height: `${size}px`
      }}
    />
  );
}
