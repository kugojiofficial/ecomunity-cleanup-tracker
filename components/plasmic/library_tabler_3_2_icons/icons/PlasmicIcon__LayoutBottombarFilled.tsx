/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutBottombarFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutBottombarFilledIcon(
  props: LayoutBottombarFilledIconProps
) {
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
          "M18 3a3 3 0 012.995 2.824L21 6v12a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-2.995-2.824L3 18V6a3 3 0 012.824-2.995L6 3h12zm0 2H6a1 1 0 00-.993.883L5 6v9h14V6a1 1 0 00-.883-.993L18 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutBottombarFilledIcon;
/* prettier-ignore-end */
