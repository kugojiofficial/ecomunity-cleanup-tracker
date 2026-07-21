/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LemonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LemonIcon(props: LemonIconProps) {
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
          "M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0L17.536 3.393zM5.868 15.06a6.5 6.5 0 109.193-9.192m-4.597 4.596l4.597 4.597m-4.597-4.597v6.364m0-6.364h6.364"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LemonIcon;
/* prettier-ignore-end */
