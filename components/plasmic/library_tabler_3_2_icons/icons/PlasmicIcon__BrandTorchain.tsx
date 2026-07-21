/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTorchainIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTorchainIcon(props: BrandTorchainIconProps) {
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
          "M15.588 15.537L12.035 12l-7.742 8.18c-.791.85.153 2.18 1.238 1.73l9.616-4.096a1.398 1.398 0 00.44-2.277h.001zM8.412 8.464L11.965 12l7.742-8.18c.791-.85-.153-2.18-1.238-1.73L8.853 6.188a1.398 1.398 0 00-.44 2.277l-.001-.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTorchainIcon;
/* prettier-ignore-end */
