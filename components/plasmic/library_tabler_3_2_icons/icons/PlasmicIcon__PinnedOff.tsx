/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinnedOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinnedOffIcon(props: PinnedOffIconProps) {
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
          "M3 3l18 18M15 4.5l-3.249 3.249m-2.57 1.433L7 10l-1.5 1.5 7 7L14 17l.82-2.186m1.43-2.563L19.5 9M9 15l-4.5 4.5M14.5 4L20 9.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PinnedOffIcon;
/* prettier-ignore-end */
