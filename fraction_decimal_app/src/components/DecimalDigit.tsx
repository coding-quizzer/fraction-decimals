import { auto } from "@popperjs/core";
import React, { useState } from "react";
import { usePopper } from "react-popper";
import { Fraction } from "../../../fractionDecimalFunctions";
import "./DecimalDigit.scss";
type DecimalDigitProps = {
  children: number;
  fraction: Fraction;
};

export default function DecimalDigit(props: DecimalDigitProps) {
  const [popperIsVisible, setPopperIsVisible] = useState<boolean | null>(null);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [-8, 13],
        },
      },
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
    ],
  });

  const { fraction } = props;

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
      >
        {`${fraction[0]} / ${fraction[1]}`}
        <div
          data-popper-arrow
          className="decimal-digit--popper-arrow"
          ref={setArrowElement}
          style={styles.arrow}
        ></div>
      </div>
    </>
  );
}
