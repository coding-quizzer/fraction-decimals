type DecimalDigitProps ={
  children: React.ReactNode;
}
export default function DecimalDigit(props: DecimalDigitProps) {
  return (
      <div>
        {props.children}
      </div>
  )
}