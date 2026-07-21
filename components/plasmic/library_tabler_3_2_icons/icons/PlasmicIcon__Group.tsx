/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.585 7.506h-2.43C5.721 6.574 5.455 6 4.56 6l-2.404.019c-.662 0-1.353.592-1.103 1.487l2.216 9.436C3.754 18.685 4.08 19 4.413 19h.64"
        }
        stroke={"currentColor"}
        strokeWidth={"1.838"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.274 1h5.645c.84 0 1.24.714 1.02 1.287l-4.687 15.109c-.42 1.133-1.159 1.603-2.354 1.603H4.413c.39 0 .76-.618 1.296-2.061l4.457-14.49c.326-.83.76-1.448 2.108-1.448z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.838"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
