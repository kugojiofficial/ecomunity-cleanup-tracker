/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccessPointIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccessPointIcon(props: AccessPointIconProps) {
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
          "M12 12v.01m2.828-2.838a4 4 0 010 5.656m2.829-8.485a8 8 0 010 11.314m-8.489-2.829a4 4 0 010-5.656m-2.831 8.485a8 8 0 010-11.314"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AccessPointIcon;
/* prettier-ignore-end */
