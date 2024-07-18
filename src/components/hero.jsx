export default function Hero({ title, subtitle }) {
  return (
    <div className="m-4 p-5 shadow-lg">
      <div className="font-bold text-black text-2xl">{title}</div>
      <div className="font-bold text-black">{subtitle}</div>
      <div className="text-right">
        <button className="hover:bg-blue-500 cursor-pointer bg-blue-300 font-bold rounded-lg p-2 max-w-[140px] text-center">
          Know more
        </button>
      </div>
    </div>
  );
}
