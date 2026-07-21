/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccessPointOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccessPointOffIcon(props: AccessPointOffIconProps) {
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
          "M3 3l18 18M14.828 9.172A4 4 0 0116 12m1.657-5.657a8 8 0 011.635 8.952m-10.124-.467a4 4 0 010-5.656m-2.831 8.485a8 8 0 010-11.314"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AccessPointOffIcon;
/* prettier-ignore-end */
