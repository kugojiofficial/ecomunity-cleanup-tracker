/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZodiacVirgoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZodiacVirgoIcon(props: ZodiacVirgoIconProps) {
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
          "M3 4a2 2 0 012 2v9m0-9a2 2 0 114 0v9m0-9a2 2 0 114 0v10c0 1.326.738 2.598 2.05 3.535C16.363 20.473 18.143 21 20 21"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 21c1.857 0 3.637-.527 4.95-1.465C18.263 18.598 19 17.326 19 16v-2a3 3 0 00-6 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ZodiacVirgoIcon;
/* prettier-ignore-end */
