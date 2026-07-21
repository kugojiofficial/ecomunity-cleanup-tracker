/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignRightFilledIcon(props: BoxAlignRightFilledIconProps) {
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
          "M18.998 3.003h-5a1 1 0 00-1 1v16a1 1 0 001 1h5a2 2 0 002-2v-14a2 2 0 00-2-2zm-9.99 16a1 1 0 01.117 1.993l-.127.007a1 1 0 01-.117-1.993l.127-.007zm-5 0a1 1 0 01.117 1.993l-.128.007a1 1 0 01-.117-1.993l.128-.007zm0-5.001a1 1 0 01.117 1.993l-.128.007a1 1 0 01-.117-1.993l.128-.007zm0-6a1 1 0 01.117 1.993l-.128.007a1 1 0 01-.117-1.993l.128-.007zm0-5a1 1 0 01.117 1.993l-.128.007a1 1 0 01-.117-1.993l.128-.007zm5 0a1 1 0 01.117 1.993l-.127.007a1 1 0 01-.117-1.993l.127-.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxAlignRightFilledIcon;
/* prettier-ignore-end */
