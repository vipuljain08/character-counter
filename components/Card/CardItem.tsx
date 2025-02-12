interface CardItemProps {
  label: string;
  count: number;
  bgColor: string;
}

export default function CardItem({ label, count, bgColor }: CardItemProps) {
  return (
    <div className={`flex md:flex-1 flex-col justify-center items-start border-2 border-transparent rounded-[2vw] px-6 h-32 ${bgColor}`}>
      <h1 className="text-6xl">{count}</h1>
      <p>{label}</p>
    </div>
  );
}
