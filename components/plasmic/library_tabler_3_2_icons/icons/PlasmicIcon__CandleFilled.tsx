/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CandleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CandleFilledIcon(props: CandleFilledIconProps) {
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
          "M14 10h-4a2 2 0 00-2 2v9a1 1 0 001 1h6a1 1 0 001-1v-9a2 2 0 00-2-2zm-2.746-7.666l-1.55 1.737C8.662 5.348 8.806 7.168 10 8.237a3 3 0 004.196-4.28l-1.452-1.624a1 1 0 00-1.49.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CandleFilledIcon;
/* prettier-ignore-end */
