/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PentagonMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PentagonMinusIcon(props: PentagonMinusIconProps) {
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
          "M12.5 21c-1.213 0-3.033.002-5.458.005a1.98 1.98 0 01-1.881-1.367l-3.064-9.43a1.98 1.98 0 01.719-2.212l8.021-5.828a1.98 1.98 0 012.326 0l8.021 5.828c.694.504.984 1.397.719 2.212L20.344 15M16 19h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PentagonMinusIcon;
/* prettier-ignore-end */
