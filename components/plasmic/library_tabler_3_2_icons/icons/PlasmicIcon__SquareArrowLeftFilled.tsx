/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareArrowLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareArrowLeftFilledIcon(
  props: SquareArrowLeftFilledIconProps
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-6.293 5.293a1 1 0 00-1.414 0l-4 4-.083.094-.064.092-.052.098-.044.11-.03.112-.017.126L7 12l.004.09.007.058.025.118.035.105.054.113.071.111c.03.04.061.077.097.112l4 4 .094.083a1 1 0 001.32-.083l.083-.094a1 1 0 00-.083-1.32L10.415 13H16l.117-.007A1 1 0 0016 11h-5.585l2.292-2.293.083-.094a1 1 0 00-.083-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareArrowLeftFilledIcon;
/* prettier-ignore-end */
