import React from "react";

import DecimalDigit from "../components/DecimalDigit";

export default {
  title: "DecimalDigit",
  component: DecimalDigit,
};
export const Default = () => <DecimalDigit fraction={[2, 7]}>{4}</DecimalDigit>;
