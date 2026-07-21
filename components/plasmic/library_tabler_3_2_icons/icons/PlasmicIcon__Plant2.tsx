/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Plant2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Plant2Icon(props: Plant2IconProps) {
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
          "M2 9a10 10 0 0020 0M12 19A10 10 0 0122 9M2 9a10 10 0 0110 10m0-15a9.699 9.699 0 012.99 7.5m-5.98 0A9.7 9.7 0 0112 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Plant2Icon;
/* prettier-ignore-end */
