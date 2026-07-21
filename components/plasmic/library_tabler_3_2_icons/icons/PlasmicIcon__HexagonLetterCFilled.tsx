/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonLetterCFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonLetterCFilledIcon(props: HexagonLetterCFilledIconProps) {
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
          "M13.666 1.429l6.75 3.98.096.063.093.078.106.074a3.22 3.22 0 011.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 012 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015zM12 7a3 3 0 00-3 3v4a3 3 0 006 0 1 1 0 00-1.993-.117L13 14a1 1 0 01-2 0v-4a1 1 0 011.993-.117L13 10a1 1 0 002 0 3 3 0 00-3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HexagonLetterCFilledIcon;
/* prettier-ignore-end */
