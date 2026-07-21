/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DashboardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DashboardIcon(props: DashboardIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 -.5 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M9.918 10H7.082A1.57 1.57 0 0 0 5.5 11.557v5.89A1.57 1.57 0 0 0 7.082 19h2.836a1.57 1.57 0 0 0 1.582-1.555v-5.889a1.57 1.57 0 0 0-1.582-1.555m0-6.001H7.082A1.54 1.54 0 0 0 5.5 5.495v1.014A1.54 1.54 0 0 0 7.082 8h2.836A1.54 1.54 0 0 0 11.5 6.508V5.494A1.54 1.54 0 0 0 9.918 4m5.164 9h2.835a1.57 1.57 0 0 0 1.583-1.555V5.557A1.57 1.57 0 0 0 17.918 4h-2.836A1.57 1.57 0 0 0 13.5 5.557v5.888A1.57 1.57 0 0 0 15.082 13m0 6h2.835a1.54 1.54 0 0 0 1.583-1.492v-1.014A1.54 1.54 0 0 0 17.918 15h-2.836a1.54 1.54 0 0 0-1.582 1.493v1.013A1.54 1.54 0 0 0 15.082 19"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default DashboardIcon;
/* prettier-ignore-end */
