/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LadleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LadleIcon(props: LadleIconProps) {
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
        d={"M3 14v1a6 6 0 1012 0V6a3 3 0 016 0"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 16c-.663 0-1.3-.036-1.896-.102l-.5-.064C4.481 15.526 3 14.821 3 14c0-.82 1.482-1.526 3.603-1.834l.5-.064c.63-.069 1.263-.103 1.897-.102.663 0 1.3.036 1.896.102l.5.064C13.519 12.474 15 13.179 15 14c0 .82-1.482 1.526-3.603 1.834l-.5.064c-.63.069-1.263.103-1.897.102z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LadleIcon;
/* prettier-ignore-end */
