/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandMetaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandMetaIcon(props: BrandMetaIconProps) {
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
          "M12 10.174C13.766 7.39 15.315 6 16.648 6c2 0 3.263 2.213 4 5.217.704 2.869.5 6.783-2 6.783-1.114 0-2.648-1.565-4.148-3.652a27.63 27.63 0 01-2.5-4.174zm0 0C10.234 7.39 8.685 6 7.352 6c-2 0-3.263 2.213-4 5.217-.704 2.869-.5 6.783 2 6.783C6.466 18 8 16.435 9.5 14.348c1-1.391 1.833-2.783 2.5-4.174z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandMetaIcon;
/* prettier-ignore-end */
