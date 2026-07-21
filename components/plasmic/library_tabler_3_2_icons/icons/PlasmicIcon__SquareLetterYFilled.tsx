/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterYFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterYFilledIcon(props: SquareLetterYFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-4.629 5.072a1 1 0 00-1.3.557L12 10.307l-1.072-2.678a1 1 0 00-1.856.742L11 13.194V16a1 1 0 00.883.993L12 17a1 1 0 001-1v-2.809l1.928-4.82a1 1 0 00-.45-1.25l-.107-.049z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterYFilledIcon;
/* prettier-ignore-end */
