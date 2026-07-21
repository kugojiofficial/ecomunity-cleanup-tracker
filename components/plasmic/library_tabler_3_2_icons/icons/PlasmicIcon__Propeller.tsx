/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PropellerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PropellerIcon(props: PropellerIconProps) {
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
        d={"M9 13a3 3 0 106 0 3 3 0 00-6 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.167 10.5c.722-1.538 1.156-3.043 1.303-4.514C15.69 4.356 14.708 3 12 3S8.31 4.357 8.53 5.986c.147 1.471.581 2.976 1.303 4.514m3.336 6.251c.97 1.395 2.057 2.523 3.257 3.386 1.3 1 2.967.833 4.321-1.512 1.354-2.345.67-3.874-.85-4.498-1.348-.608-2.868-.985-4.562-1.128M8.664 13c-1.693.143-3.213.52-4.56 1.128-1.522.623-2.206 2.153-.852 4.498s3.02 2.517 4.321 1.512c1.2-.863 2.287-1.991 3.258-3.386"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PropellerIcon;
/* prettier-ignore-end */
