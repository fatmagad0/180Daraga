function Hero({ image, alt, title, subtitle, height = "h-[60vh]" }) {
  return (
    <div className={`relative w-full ${height}`}>
      <img src={image} alt={alt} className="w-full h-full object-cover"/>

      <div className="absolute inset-0 bg-gradient-to-r from-red-950/100 to-transparent flex flex-col items-start justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold px-20">{title}</h1>
        <p className="mt-2 text-lg px-20">{subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;
