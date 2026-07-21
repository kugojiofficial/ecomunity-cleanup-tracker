/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartGridDotsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartGridDotsFilledIcon(props: ChartGridDotsFilledIconProps) {
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
          "M18 2a1 1 0 011 1v.171a3.008 3.008 0 011.83 1.83L21 5a1 1 0 110 2h-.171a3.008 3.008 0 01-1.828 1.829L19 11h2a1 1 0 010 2h-2v2.171a3.008 3.008 0 011.83 1.83L21 17a1 1 0 010 2h-.171a3.008 3.008 0 01-1.828 1.829L19 21a1 1 0 01-2 0v-.17A3.007 3.007 0 0115.171 19H13v2a1 1 0 01-2 0v-2H8.829a3.008 3.008 0 01-1.828 1.829L7 21a1 1 0 11-2 0v-.17A3.007 3.007 0 013.171 19H3a1 1 0 010-2h.17A3.008 3.008 0 015 15.17v-.34A3.007 3.007 0 013.171 13H3a1 1 0 010-2h.17A3.008 3.008 0 015 9.17V7H3a1 1 0 010-2h2V3a1 1 0 012 0v2h4V3a1 1 0 012 0v2h2.17A3.008 3.008 0 0117 3.17V3a1 1 0 011-1zm-7 11H8.829a3.008 3.008 0 01-1.828 1.829v.342A3.008 3.008 0 018.829 17H11v-4zm6 0h-4v4h2.17A3.008 3.008 0 0117 15.17V13zm-6-6H7v2.171a3.008 3.008 0 011.83 1.83L11 11V7zm4.171 0H13v4h4V8.83A3.008 3.008 0 0115.171 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartGridDotsFilledIcon;
/* prettier-ignore-end */
