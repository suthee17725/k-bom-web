import createClasses from "../utils/create-classes";
export default function InputBar({
  children,
  value,
  onChange,
  name,
  style,
  isInvalid,
  disabled,
}) {
  const className = createClasses(
    `w-[300px] px-5 py-1 border-none text-lg rounded-full ring-2 ring-c-gray2 outline-none focus:ring-2 hover:ring-c-green2 transition-all duration-200`,
    isInvalid
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 focus:ring-c-green4",
    disabled ? "bg-gray-100" : "bg-white"
  );
  return (
    <div className="input-bar">
      <input
        type="text"
        name={name}
        placeholder={children}
        value={value}
        onChange={onChange}
        style={style}
        className={className}
        disabled={disabled}
      />
    </div>
  );
}
