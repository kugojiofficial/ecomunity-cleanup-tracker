/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandHipchatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandHipchatIcon(props: BrandHipchatIconProps) {
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
          "M17.802 17.292s.077-.055.2-.149c1.843-1.425 3-3.49 3-5.789 0-4.286-4.03-7.764-9-7.764s-9 3.478-9 7.764c0 4.288 4.03 7.646 9 7.646.424 0 1.12-.028 2.088-.084 1.262.82 3.104 1.493 4.716 1.493.499 0 .734-.41.414-.828-.486-.596-1.156-1.551-1.416-2.29l-.002.001zM7.5 13.5c2.5 2.5 6.5 2.5 9 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandHipchatIcon;
/* prettier-ignore-end */
