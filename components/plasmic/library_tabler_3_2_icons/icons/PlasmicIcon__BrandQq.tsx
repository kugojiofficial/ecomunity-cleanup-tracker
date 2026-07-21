/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandQqIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandQqIcon(props: BrandQqIconProps) {
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
          "M6 9.748a14.715 14.715 0 0011.995-.052C18.27.46 6.891-1.56 6 9.748zM18 10c.984 2.762 1.949 4.765 2 7.153.014.688-.664 1.346-1.184.303C18.47 16.76 17.864 16.275 17 16m0 0c.031 1.831.147 3.102-1 4m-8 0c-1.099-.87-.914-2.24-1-4m-1-6c-.783 2.338-1.742 4.12-1.968 6.43-.217 2.227.716 1.644 1.16.917C5.488 16.86 6.09 16.413 7 16m8.898-3l-.476-2M8 20l-1.5 1c-.5.5-.5 1 .5 1h10c1 0 1-.5.5-1L16 20"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.75 7a1 1 0 102 0 1 1 0 00-2 0zm-3.5 0a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandQqIcon;
/* prettier-ignore-end */
