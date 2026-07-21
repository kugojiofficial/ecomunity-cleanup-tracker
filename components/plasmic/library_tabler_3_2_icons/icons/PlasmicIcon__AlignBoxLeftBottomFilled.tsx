/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlignBoxLeftBottomFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlignBoxLeftBottomFilledIcon(
  props: AlignBoxLeftBottomFilledIconProps
) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM8 17H6l-.117.007A1 1 0 006 19h2l.117-.007A1 1 0 008 17zm4-3H6l-.117.007A1 1 0 006 16h6l.117-.007A1 1 0 0012 14zm-2-3H6l-.117.007A1 1 0 006 13h4l.117-.007A1 1 0 0010 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlignBoxLeftBottomFilledIcon;
/* prettier-ignore-end */
