/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NoteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NoteOffIcon(props: NoteOffIconProps) {
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
          "M13 20l3.505-3.505m2-2l1.501-1.501M17 13h3V6a2 2 0 00-2-2H8m-3.427.6C4.218 4.96 4 5.453 4 6v12a2 2 0 002 2h7v-6c0-.272.109-.519.285-.699M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NoteOffIcon;
/* prettier-ignore-end */
