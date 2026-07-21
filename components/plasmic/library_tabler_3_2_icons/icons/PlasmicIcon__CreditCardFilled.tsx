/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditCardFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditCardFilledIcon(props: CreditCardFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22 10v6a4 4 0 01-4 4H6a4 4 0 01-4-4v-6h20zM7.01 14H7a1.002 1.002 0 00-.917 1.387A1 1 0 007.01 16a1 1 0 000-2zM13 14h-2a1 1 0 000 2h2a1 1 0 000-2zm5-10a4 4 0 014 4H2a4 4 0 014-4h12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CreditCardFilledIcon;
/* prettier-ignore-end */
