/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudDownloadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudDownloadIcon(props: CloudDownloadIconProps) {
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
          "M19 18a3.5 3.5 0 100-7h-1c.146-.65.148-1.32.006-1.97a4.785 4.785 0 00-.831-1.823 5.363 5.363 0 00-1.544-1.398 5.964 5.964 0 00-2.02-.759 6.223 6.223 0 00-2.19-.006 5.971 5.971 0 00-2.024.749C8.157 6.533 7.295 7.687 7 9a4.745 4.745 0 00-2.966.886 4.39 4.39 0 00-1.7 2.487 4.227 4.227 0 00.34 2.954A4.513 4.513 0 004.9 17.4M12 13v9m-3-3l3 3 3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloudDownloadIcon;
/* prettier-ignore-end */
