/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAdobeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAdobeIcon(props: BrandAdobeIconProps) {
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
          "M12.893 4.514l7.977 14a.993.993 0 01-.394 1.365 1.04 1.04 0 01-.5.127H16.5l-4.5-8-2.5 4H11l2 4H4.023c-.565 0-1.023-.45-1.023-1 0-.171.045-.34.13-.49l7.977-13.993a1.035 1.035 0 011.786 0v-.009z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAdobeIcon;
/* prettier-ignore-end */
