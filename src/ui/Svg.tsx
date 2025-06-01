interface SvgProps {
  svgUrl: string;
  color: string;
  size: number;
}

export default function Svg({ svgUrl, color }: SvgProps) {
  return (
    <div
      className="aspect-square h-12 transition group-hover:scale-105 md:h-[72px] lg:h-24 xl:h-[120px]"
      style={{
        maskImage: `url(${svgUrl})`,
        WebkitMaskImage: `url(${svgUrl})`,
        maskSize: "contain",
        backgroundColor: color,
      }}
    />
  );
}
