export const Input =  ({
  disabled,
  children,
  onClick,
  type,
  placeholder

}) => {
  return <span onClick = {onClick} className={`text-white rounded-2xl px-3 py-2 cursor-pointer ${disabled ? "bg-amber-500" : "bg-amber-900"} `}> 
    <input type={type} placeholder={placeholder} />

  </span>
}