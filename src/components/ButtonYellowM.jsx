export default function ButtonYellowM({ children, type, value, onClick }) {
  return (
    <button
      type={type}
      value={value}
      onClick={onClick}
      className=" w-fit px-7 py-2 rounded-full bg-green-400 font-semibold transition-all hover:bg-c-yellow2 hover:scale-105 active:scale-95 active:bg-c-yellow3"
    >
      {children}
    </button>
  );
}
