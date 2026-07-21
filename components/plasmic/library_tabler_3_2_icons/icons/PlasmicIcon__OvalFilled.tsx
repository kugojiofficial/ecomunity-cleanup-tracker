/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OvalFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OvalFilledIcon(props: OvalFilledIconProps) {
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
          "M12 2c3.972 0 7 4.542 7 10s-3.028 10-7 10c-3.9 0-6.89-4.379-6.997-9.703L5 12l.003-.297C5.11 6.38 8.1 2 12 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OvalFilledIcon;
/* prettier-ignore-end */
