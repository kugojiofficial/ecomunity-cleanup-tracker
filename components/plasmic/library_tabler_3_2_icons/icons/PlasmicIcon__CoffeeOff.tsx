/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoffeeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoffeeOffIcon(props: CoffeeOffIconProps) {
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
          "M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1 .73-.565 1.783-.923 3-.99M8 3c-.194.14-.364.305-.506.49M12 3a2.4 2.4 0 00-1 2 2.4 2.4 0 001 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 10h3v3m-.257 3.743A6 6 0 0111 21H9a6 6 0 01-6-6v-5h7m10.116 6.124a3 3 0 00-3.118-4.953M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CoffeeOffIcon;
/* prettier-ignore-end */
