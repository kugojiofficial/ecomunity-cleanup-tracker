/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ConeFilledIcon(props: ConeFilledIconProps) {
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
          "M12 1.001c.72 0 1.385.387 1.749 1.03l8.13 14.99a1 1 0 01.121.477v.498c0 2.46-4.306 3.945-9.677 4.002L12 22c-5.52 0-10-1.495-10-4.003v-.5a1 1 0 01.121-.477L10.26 2.015A2 2 0 0112 1"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ConeFilledIcon;
/* prettier-ignore-end */
