export const Button =  ({
  disabled,
  children,
  onClick

}) => {
  return <div onClick = {onClick} className={`text-white rounded-2xl px-3 py-2 cursor-pointer ${disabled ? "bg-amber-500" : "bg-amber-900"} `}> 
    {children}
  </div>
}