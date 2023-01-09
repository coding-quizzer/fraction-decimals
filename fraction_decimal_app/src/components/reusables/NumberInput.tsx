import "./NumberInput.scss";
type NumberInputProps = {
  name: string;
  value: number | null;
  setValue: (value: number | null) => void;
};

export default function NumberInput(props: NumberInputProps) {
  const { name, value, setValue } = props;
  return (
    <input
      name={name}
      value={value ? value : ""}
      onChange={(e) => {
        (!e.target.value || Number(e.target.value)) && setValue(Number(e.target.value));
      }}
      type="number"
      className="number-input"
      style={{ width: value ? `${String(value).length * 0.6 + 1.4}em` : "2em" }}
      min={1}
    />
  );
}
