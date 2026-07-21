/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PodiumOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PodiumOffIcon(props: PodiumOffIconProps) {
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
          "M12 8h7l-.621 2.485A2 2 0 0116.439 12H16m-4 0H7.561a2 2 0 01-1.94-1.515L5 8h3M7 8V7m.864-3.106A2.99 2.99 0 0110 3m-2 9l1 9m6.599-5.387L15 21m-8 0h10M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PodiumOffIcon;
/* prettier-ignore-end */
