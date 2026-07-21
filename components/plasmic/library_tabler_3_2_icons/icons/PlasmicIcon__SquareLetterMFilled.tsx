/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterMFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterMFilledIcon(props: SquareLetterMFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-3 6c0-1.014-1.336-1.384-1.857-.514L12 11.056l-2.143-3.57C9.336 6.616 8 6.986 8 8v8a1 1 0 001 1l.117-.007A1 1 0 0010 16v-4.39l1.143 1.904.074.108a1 1 0 001.64-.108L14 11.61V16a1 1 0 002 0V8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterMFilledIcon;
/* prettier-ignore-end */
