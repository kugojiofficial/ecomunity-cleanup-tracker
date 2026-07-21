/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSnapseedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSnapseedIcon(props: BrandSnapseedIconProps) {
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
          "M8.152 3.115a.46.46 0 00-.609 0C4.6 5.695 3.014 8.556 3 11.493c0 2.928 1.586 5.803 4.543 8.392a.46.46 0 00.61 0c2.957-2.589 4.547-5.464 4.547-8.392 0-2.928-1.6-5.799-4.548-8.378z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 20l12.09-.011c.503 0 .91-.434.91-.969v-6.063c0-.535-.407-.968-.91-.968h-7.382"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSnapseedIcon;
/* prettier-ignore-end */
