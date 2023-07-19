import createClasses from "../utils/create-classes";

export default function InputForm({
  labelName,
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
  disabled,
}) {
  const className = createClasses(
    `block w-full border rounded-md px-3 py-2 outline-none text-lg `,
    isInvalid
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 focus:ring-blue-300",
    disabled ? "bg-gray-100" : "bg-white"
  );
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <input
        id={name}
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
    </>
  );
}
