/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterKFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterKFilledIcon(props: SquareLetterKFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-4.47 5.152a1 1 0 00-1.378.318L11 10.913V8a1 1 0 00-.883-.993L10 7a1 1 0 00-1 1v8a1 1 0 102 0v-2.914l2.152 3.444a1 1 0 001.276.374l.102-.056.095-.068a1 1 0 00.223-1.31L12.678 12l2.17-3.47a1 1 0 00-.318-1.378z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterKFilledIcon;
/* prettier-ignore-end */
