/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnchorOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnchorOffIcon(props: AnchorOffIconProps) {
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
          "M12 12v9m-8-8a8 8 0 0014.138 5.13m1.44-2.56A7.99 7.99 0 0020 13m1 0h-2M5 13H3m9.866-4.127a3 3 0 10-3.737-3.747M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AnchorOffIcon;
/* prettier-ignore-end */
