/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CylinderPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CylinderPlusIcon(props: CylinderPlusIconProps) {
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
          "M5 6c0 .394.181.784.533 1.148.352.364.867.695 1.517.973.65.279 1.422.5 2.271.65.85.151 1.76.229 2.679.229.92 0 1.83-.078 2.679-.228.85-.151 1.62-.372 2.27-.65.65-.28 1.166-.61 1.518-.974C18.82 6.784 19 6.394 19 6c0-.394-.181-.784-.533-1.148-.352-.364-.867-.695-1.517-.973-.65-.279-1.422-.5-2.271-.65C13.829 3.077 12.919 3 12 3c-.92 0-1.83.078-2.679.228-.85.151-1.62.372-2.27.65-.65.28-1.166.61-1.518.974C5.18 5.216 5 5.606 5 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 6v12c0 1.657 3.134 3 7 3 .173 0 .345-.003.515-.008M19 12V6m-3 13h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CylinderPlusIcon;
/* prettier-ignore-end */
