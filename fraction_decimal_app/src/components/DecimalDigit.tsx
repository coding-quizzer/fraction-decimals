import "./DecimalDigit.scss"
type DecimalDigitProps ={
  children: React.ReactNode;
}
export default function DecimalDigit(props: DecimalDigitProps) {
  return (
      <div className="decimal-digit">
        {props.children}
      </div>
  )
}