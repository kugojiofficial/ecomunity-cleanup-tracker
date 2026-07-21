/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessFilledIcon(props: ChessFilledIconProps) {
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
          "M12 2a4 4 0 014 4 5.03 5.03 0 01-.438 2.001L16 8a1 1 0 01.117 1.993L16 10h-1.263l1.24 5.79a1 1 0 01-.747 1.184l-.113.02L15 17H9a1.001 1.001 0 01-.996-1.093l.018-.117L9.262 10H8a1 1 0 01-.117-1.993L8 8h.438a5.154 5.154 0 01-.412-1.525l-.02-.259L8 6a4 4 0 014-4zm6 16H6a1 1 0 00-1 1 2 2 0 002 2h10a2 2 0 001.987-1.768l.011-.174A1 1 0 0018 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChessFilledIcon;
/* prettier-ignore-end */
