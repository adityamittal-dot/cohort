export const Button =  ({
  disabled,
  children,
  onClick

}) => {
  return <div onClick = {onClick} className={`pointer ${disabled ? "bg-amber-500" : "bg-amber-900"} `}> 
    {children}
  </div>
}