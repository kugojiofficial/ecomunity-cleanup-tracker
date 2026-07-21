/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterYFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterYFilledIcon(props: CircleLetterYFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2.371 5.072a1 1 0 00-1.3.557L12 10.307l-1.072-2.678a1 1 0 00-1.856.742L11 13.194V16a1 1 0 00.883.993L12 17a1 1 0 001-1v-2.809l1.928-4.82a1 1 0 00-.45-1.25l-.107-.049z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterYFilledIcon;
/* prettier-ignore-end */
