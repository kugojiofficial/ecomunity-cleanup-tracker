/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MichelinBibGourmandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MichelinBibGourmandIcon(props: MichelinBibGourmandIconProps) {
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
          "M4.97 20c-2.395-1.947-4.763-5.245-1.005-8-.52-4 3.442-7.5 5.524-7.5.347-1 1.499-1.5 2.54-1.5 1.04 0 2.135.5 2.482 1.5 2.082 0 6.044 3.5 5.524 7.5 3.758 2.755 1.39 6.053-1.005 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 11c0 .53.105 1.04.293 1.414.187.375.442.586.707.586.265 0 .52-.21.707-.586C9.895 12.04 10 11.53 10 11c0-.53-.105-1.04-.293-1.414C9.52 9.21 9.265 9 9 9c-.265 0-.52.21-.707.586C8.105 9.96 8 10.47 8 11zm6 0c0 .53.105 1.04.293 1.414.187.375.442.586.707.586.265 0 .52-.21.707-.586.188-.375.293-.884.293-1.414 0-.53-.105-1.04-.293-1.414C15.52 9.21 15.265 9 15 9c-.265 0-.52.21-.707.586C14.105 9.96 14 10.47 14 11zm-6 6.085c3.5 2.712 6.5 2.712 9-1.085m-4 2.5c.815-2.337 1.881-1.472 2-.55"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MichelinBibGourmandIcon;
/* prettier-ignore-end */
