/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlurOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlurOffIcon(props: BlurOffIconProps) {
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
          "M12 3v5m0 4v8M5.641 5.631A9 9 0 0018.36 18.369m1.68-2.318A9 9 0 007.966 3.953M16 12h5m-8-3h7m-8-3h6m-6 12h6m-6-3h3m4 0h1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BlurOffIcon;
/* prettier-ignore-end */
