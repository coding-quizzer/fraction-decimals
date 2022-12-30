import React, { useState } from "react";
import { usePopper } from "react-popper";
import "./DecimalDigit.scss";
type DecimalDigitProps = {
  children: React.ReactNode;
};

export default function DecimalDigit(props: DecimalDigitProps) {
  const [popperIsVisible, setPopperIsVisible] = useState<boolean | null>(null);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  console.log(attributes);

  return (
    <>
      <div
        className="decimal-digit"
        ref={setReferenceElement}
        onMouseOver={() => setPopperIsVisible(true)}
        onMouseLeave={() => setPopperIsVisible(null)}
      >
        {props.children}
      </div>
      <div
        className="decimal-digit--popper"
        ref={setPopperElement}
        style={styles.popper}
        {...(attributes.popper, { "data-show": popperIsVisible })}
      ></div>
    </>
  );
}
