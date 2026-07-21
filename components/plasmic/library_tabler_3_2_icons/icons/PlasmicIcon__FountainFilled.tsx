/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FountainFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FountainFilledIcon(props: FountainFilledIconProps) {
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
          "M15 2a4 4 0 014 4 1 1 0 01-1.993.117L17 6a2 2 0 00-3.995-.15L13 6v9h1v-4a3 3 0 016 0 1 1 0 01-1.993.117L18 11a1 1 0 00-1.993-.117L16 11v4h5a1 1 0 01.993.883L22 16v2a4 4 0 01-3.8 3.995L18 22H6a4 4 0 01-3.995-3.8L2 18v-2a1 1 0 01.883-.993L3 15h5v-4a1 1 0 00-1.993-.117L6 11a1 1 0 11-2 0 3 3 0 015.995-.176L10 11v4h1V6a2 2 0 10-4 0 1 1 0 01-2 0 4 4 0 017.001-2.645A3.984 3.984 0 0115 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FountainFilledIcon;
/* prettier-ignore-end */
