/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialOffIcon(props: SocialOffIconProps) {
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
          "M10 5a2 2 0 104 0 2 2 0 00-4 0zM3 19a2 2 0 104 0 2 2 0 00-4 0zm14.57-1.398a2 2 0 002.83 2.827m-9.287-9.296a3 3 0 103.765 3.715M12 7v1m-5.3 9.8l2.8-2m7.8 2l-2.8-2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SocialOffIcon;
/* prettier-ignore-end */
