/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyPlusFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyPlusFilledIcon(props: CopyPlusFilledIconProps) {
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
          "M18.333 6A3.667 3.667 0 0122 9.667v8.666A3.667 3.667 0 0118.333 22H9.667A3.667 3.667 0 016 18.333V9.667A3.667 3.667 0 019.667 6h8.666zM14 10a1 1 0 00-1 1v2h-2a1 1 0 00-.993.883L10 14a1 1 0 001 1h2v2a1 1 0 00.883.993L14 18a1 1 0 001-1v-2h2a1 1 0 00.993-.883L18 14a1 1 0 00-1-1h-2v-2a1 1 0 00-.883-.993L14 10zm1-8c1.094 0 1.828.533 2.374 1.514a1.002 1.002 0 01-.76 1.48 1 1 0 01-.988-.508C15.405 4.088 15.284 4 15 4H5c-.548 0-1 .452-1 1v9.998c0 .32.154.618.407.805l.1.065a.999.999 0 11-.99 1.738A3 3 0 012 15V5c0-1.652 1.348-3 3-3h10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CopyPlusFilledIcon;
/* prettier-ignore-end */
