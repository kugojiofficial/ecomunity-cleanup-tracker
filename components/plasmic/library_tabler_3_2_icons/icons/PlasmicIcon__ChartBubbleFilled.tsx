/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartBubbleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartBubbleFilledIcon(props: ChartBubbleFilledIconProps) {
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
          "M6 12a4 4 0 11-3.995 4.2L2 16l.005-.2A4 4 0 016 12zm10 4a3 3 0 11-2.995 3.176L13 19l.005-.176A3 3 0 0116 16zM14.5 2a5.5 5.5 0 11-5.496 5.721L9 7.5l.004-.221A5.5 5.5 0 0114.5 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartBubbleFilledIcon;
/* prettier-ignore-end */
