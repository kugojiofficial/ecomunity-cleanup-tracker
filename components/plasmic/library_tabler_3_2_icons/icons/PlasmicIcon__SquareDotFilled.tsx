/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareDotFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareDotFilledIcon(props: SquareDotFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 8a2 2 0 00-1.995 1.85L10 12l.005.15A2 2 0 1012 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareDotFilledIcon;
/* prettier-ignore-end */
