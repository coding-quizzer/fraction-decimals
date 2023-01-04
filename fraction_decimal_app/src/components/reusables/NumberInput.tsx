import "./NumberInput.scss";
type NumberInputProps = {
  name: string;
  value: string;
  setValue: (value: string) => void;
};

export default function NumberInput(props: NumberInputProps) {
  const { name, value, setValue } = props;
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => {
        (!e.target.value || Number(e.target.value)) && setValue(e.target.value);
      }}
      type="number"
      className="number-input"
      style={{ width: value ? `${value.length * 0.6 + 1.4}em` : "2em" }}
      min={1}
    />
  );
}
