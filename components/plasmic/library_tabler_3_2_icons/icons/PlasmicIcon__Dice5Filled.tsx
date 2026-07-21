/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Dice5FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Dice5FilledIcon(props: Dice5FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM15.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3.5-3.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Dice5FilledIcon;
/* prettier-ignore-end */
