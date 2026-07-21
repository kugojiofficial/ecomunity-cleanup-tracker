/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SaltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SaltIcon(props: SaltIconProps) {
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
          "M12 13v.01M10 16v.01m4-.01v.01M7.5 8h9l-.281-2.248A2 2 0 0014.234 4H9.766A2 2 0 007.78 5.752L7.5 8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.5 8l-1.612 9.671A2 2 0 007.861 20h8.278a2 2 0 001.973-2.329L16.5 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SaltIcon;
/* prettier-ignore-end */
