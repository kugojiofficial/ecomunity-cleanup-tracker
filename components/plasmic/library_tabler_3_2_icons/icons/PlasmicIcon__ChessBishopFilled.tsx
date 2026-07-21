/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessBishopFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessBishopFilledIcon(props: ChessBishopFilledIconProps) {
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
          "M12 2a2 2 0 011.386 3.442c.646.28 1.226.62 1.74 1.017l-3.833 3.834-.083.094a1 1 0 001.403 1.403l.094-.083 3.814-3.813C17.498 9.244 18 10.964 18 13c0 1.913-1.178 3.722-3.089 3.973l-.2.02L14.5 17h-5C7.374 17 6 15.076 6 13c0-3.68 1.57-6.255 4.613-7.56A2 2 0 0112 2zm6 16H6a1 1 0 00-1 1 2 2 0 002 2h10a2 2 0 001.987-1.768l.011-.174A1 1 0 0018 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChessBishopFilledIcon;
/* prettier-ignore-end */
