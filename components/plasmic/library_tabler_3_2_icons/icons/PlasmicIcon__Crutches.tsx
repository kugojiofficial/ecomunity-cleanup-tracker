/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CrutchesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CrutchesIcon(props: CrutchesIconProps) {
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
          "M8 5a2 2 0 012-2h4a2 2 0 010 4h-4a2 2 0 01-2-2zm3 16h2m-1 0v-4.092a3 3 0 01.504-1.664l.992-1.488A3 3 0 0014 12.092V7m-2 14v-4.092a3 3 0 00-.504-1.664l-.992-1.488A3 3 0 0110 12.092V7m0 4h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CrutchesIcon;
/* prettier-ignore-end */
