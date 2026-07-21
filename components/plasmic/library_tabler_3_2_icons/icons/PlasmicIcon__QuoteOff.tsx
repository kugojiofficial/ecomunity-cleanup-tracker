/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type QuoteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function QuoteOffIcon(props: QuoteOffIconProps) {
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
          "M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1m4 4v3c0 2.667-1.333 4.333-4 5m13-7h-4m-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 .66-.082 1.26-.245 1.798m-1.653 2.29c-.571.4-1.272.704-2.102.912M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default QuoteOffIcon;
/* prettier-ignore-end */
