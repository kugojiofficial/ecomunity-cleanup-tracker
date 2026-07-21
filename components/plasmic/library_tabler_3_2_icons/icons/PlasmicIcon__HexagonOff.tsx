/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonOffIcon(props: HexagonOffIconProps) {
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
          "M8.693 4.69l2.336-1.39a2.056 2.056 0 012 0l6 3.573H19a2 2 0 011 1.747v6.536c0 .246-.045.485-.13.707m-2.16 1.847l-4.739 3.027a2 2 0 01-1.942 0l-6-3.833A2 2 0 014 15.157V8.62a2 2 0 011.029-1.748l1.154-.687M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonOffIcon;
/* prettier-ignore-end */
