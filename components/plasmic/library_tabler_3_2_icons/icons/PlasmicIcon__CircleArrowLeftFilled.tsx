/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleArrowLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleArrowLeftFilledIcon(
  props: CircleArrowLeftFilledIconProps
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
          "M12 2a10 10 0 01.324 19.995L12 22l-.324-.005A10 10 0 0112 2zm.707 5.293a1 1 0 00-1.414 0l-4 4c-.03.03-.057.061-.083.094l-.064.092-.052.098-.044.11-.03.112-.017.126L7 12l.004.09.007.058.025.118.035.105.054.113.043.07.071.095.054.058 4 4 .094.083a1 1 0 001.32-1.497L10.415 13H16l.117-.007A1 1 0 0016 11h-5.586l2.293-2.293.083-.094a1 1 0 00-.083-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowLeftFilledIcon;
/* prettier-ignore-end */
