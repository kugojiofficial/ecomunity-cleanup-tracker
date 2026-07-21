/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterHFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterHFilledIcon(props: SquareLetterHFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-5 5a1 1 0 00-1 1v3h-2V8a1 1 0 00-.883-.993L10 7a1 1 0 00-1 1v8a1 1 0 102 0v-3h2v3a1 1 0 00.883.993L14 17a1 1 0 001-1V8a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterHFilledIcon;
/* prettier-ignore-end */
