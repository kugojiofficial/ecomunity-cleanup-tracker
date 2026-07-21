/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditCardRefundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditCardRefundIcon(props: CreditCardRefundIconProps) {
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
          "M12 19H6a3 3 0 01-3-3V8a3 3 0 013-3h12a3 3 0 013 3v4.5M3 10h18M7 15h.01M11 15h2m3 4h6m-3-3l-3 3 3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CreditCardRefundIcon;
/* prettier-ignore-end */
