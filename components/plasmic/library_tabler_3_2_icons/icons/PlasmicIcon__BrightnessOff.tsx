/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrightnessOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrightnessOffIcon(props: BrightnessOffIconProps) {
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
          "M12 3v5m0 4v9M5.641 5.631A9 9 0 0018.36 18.369m1.68-2.318A9 9 0 007.966 3.953M12.5 8.5l4.15-4.15M12 14l1.025-.983m2.065-1.981l4.28-4.106M12 19.6l3.79-3.79m2-2l3.054-3.054M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrightnessOffIcon;
/* prettier-ignore-end */
