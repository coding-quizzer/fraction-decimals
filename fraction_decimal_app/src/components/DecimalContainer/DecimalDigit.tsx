import React, { useEffect, useRef, useState } from "react";
// import { usePopper } from "react-popper";
import {
  arrow,
  useFloating,
  useHover,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import { Fraction } from "../../../../fractionDecimalFunctions";
import "./DecimalDigit.scss";
import NumberContainer from "../reusables/NumberContainer";
type DecimalDigitProps = {
  children: number;
  fraction: Fraction;
};

export default function DecimalDigit(props: DecimalDigitProps) {
  const [isOpen, setIsOpen] = useState(false);
  // const [popperIsVisible, setPopperIsVisible] = useState<boolean | null>(null);
  // const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
  //   null
  // );
  // const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
  //   null
  // );

  const arrowRef = useRef(null);

  const floatingObj = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      arrow({
        element: arrowRef,
      }),
    ],
  });
  useEffect(() => {
    console.log(floatingObj);
  }, [floatingObj]);

  const { x, y, strategy, refs, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      arrow({
        element: arrowRef,
      }),
    ],
  });

  // console.log(middlewareData);

  // const arrowX = middlewareData.arrow?.x;
  // const arrowY = middlewareData.arrow?.y;

  const [arrowCoords, setArrowCoords] = useState({
    x: middlewareData.arrow?.x,
    y: middlewareData.arrow?.y,
  });

  useEffect(() => {
    setArrowCoords({ x: middlewareData.arrow?.x, y: middlewareData.arrow?.y });
  }, [middlewareData.arrow?.x, middlewareData.arrow?.y]);

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  // console.log({ x, y, strategy, refs });
  // const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  // const { styles, attributes } = usePopper(referenceElement, popperElement, {
  //   placement: "bottom-start",
  //   modifiers: [
  //     {
  //       name: "offset",
  //       options: {
  //         offset: [-8, 13],
  //       },
  //     },
  //     {
  //       name: "arrow",
  //       options: {
  //         element: arrowElement,
  //       },
  //     },
  //   ],
  // });

  const { fraction } = props;

  return (
    <>
      <NumberContainer
        ref={refs.setReference}
        // onMouseOver={() => setPopperIsVisible(true)}
        // onMouseLeave={() => setPopperIsVisible(null)}
        className={"decimal-digit"}
        width={36}
        {...getReferenceProps()}
      >
        {props.children}
      </NumberContainer>
      {/* <div
        className="decimal-digit--popper"
        ref={setPopperElement}
        style={styles.popper}
        {...(attributes.popper, { "data-show": popperIsVisible })}
      > */}
      <FloatingPortal>
        {isOpen && (
          <div
            className="decimal-digit--popper"
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: "max-content",
            }}
            {...getFloatingProps()}
          >
            {`${fraction[0]} / ${fraction[1]}`}
            <div
              data-popper-arrow
              className="decimal-digit--popper-arrow"
              ref={arrowRef}
              style={{
                left: arrowCoords.x ? `${arrowCoords.x}px` : "",
                top: arrowCoords.y ? `${arrowCoords.y}px` : "",
              }}
            ></div>
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
