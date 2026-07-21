/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterNFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterNFilledIcon(props: SquareLetterNFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-8.106 5.553C10.423 6.609 9 6.945 9 8v8a1 1 0 001 1l.117-.007A1 1 0 0011 16v-3.764l2.106 4.211c.471.944 1.894.608 1.894-.447V8a1 1 0 00-1-1l-.117.007A1 1 0 0013 8v3.764l-2.106-4.211z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterNFilledIcon;
/* prettier-ignore-end */
