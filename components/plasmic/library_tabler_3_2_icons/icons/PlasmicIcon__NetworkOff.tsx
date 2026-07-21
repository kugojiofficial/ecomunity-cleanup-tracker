/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NetworkOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NetworkOffIcon(props: NetworkOffIconProps) {
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
        d={"M6.528 6.536a6 6 0 007.942 7.933m2.247-1.76A6 6 0 008.29 4.284"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 3c1.333.333 2 2.333 2 6 0 .337-.006.66-.017.968m-.55 3.473c-.333.884-.81 1.403-1.433 1.559m0-12c-.936.234-1.544 1.29-1.822 3.167m-.16 3.838C10.134 13.034 10.794 14.7 12 15M6 9h3m4 0h5M3 20h7m4 0h7m-11 0a2 2 0 104 0 2 2 0 00-4 0zm2-5v3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NetworkOffIcon;
/* prettier-ignore-end */
