/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChristmasTreeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChristmasTreeIcon(props: ChristmasTreeIconProps) {
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
          "M12 3l4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1 4-4zm2 14v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChristmasTreeIcon;
/* prettier-ignore-end */
