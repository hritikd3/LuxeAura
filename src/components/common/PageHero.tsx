interface PageHeroProps {
  title: string;
  image: string;
}

export default function PageHero({ title, image }: PageHeroProps) {
  return (
    <div className="relative h-[400px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}