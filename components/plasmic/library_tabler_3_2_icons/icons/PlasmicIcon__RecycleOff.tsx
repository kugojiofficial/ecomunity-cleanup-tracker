/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RecycleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RecycleOffIcon(props: RecycleOffIconProps) {
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
          "M12 17l-2 2m0 0l2 2m-2-2h9m1.896-2.071a2 2 0 00-.146-.679l-.55-1M8.536 11l-.732-2.732m0 0L5.072 9m2.732-.732l-4.5 7.794a2 2 0 001.506 2.89l1.141.024M15.464 11l2.732.732m0 0L18.928 9m-.732 2.732l-4.5-7.794a2 2 0 00-3.256-.14l-.591.976M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RecycleOffIcon;
/* prettier-ignore-end */
