/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleArrowDownLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleArrowDownLeftFilledIcon(
  props: CircleArrowDownLeftFilledIconProps
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM9 8a1 1 0 00-1 1v6l.007.117.029.149.035.105.054.113.071.111c.03.04.061.077.097.112l.09.08.096.067.098.052.11.044.112.03.126.017L15 16l.117-.007A1 1 0 0016 15l-.007-.117A1 1 0 0015 14h-3.586l4.293-4.293.083-.094a1 1 0 00-1.497-1.32L10 12.584V9l-.007-.117A1 1 0 009 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowDownLeftFilledIcon;
/* prettier-ignore-end */
