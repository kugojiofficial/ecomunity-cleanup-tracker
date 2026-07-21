/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareArrowRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareArrowRightFilledIcon(
  props: SquareArrowRightFilledIconProps
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-6.387 5.21a1 1 0 00-1.32.083l-.083.094a1 1 0 00.083 1.32L13.585 11H8l-.117.007A1 1 0 008 13h5.585l-2.292 2.293-.083.094a1 1 0 001.497 1.32l4-4 .073-.082.074-.104.052-.098.044-.11.03-.112.017-.126L17 12l-.007-.118-.029-.148-.035-.105-.054-.113-.071-.111a1.004 1.004 0 00-.097-.112l-4-4-.094-.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareArrowRightFilledIcon;
/* prettier-ignore-end */
