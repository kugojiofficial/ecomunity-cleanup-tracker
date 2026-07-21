/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessKingFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessKingFilledIcon(props: ChessKingFilledIconProps) {
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
          "M12 2a1 1 0 01.993.883L13 3v2h2a1 1 0 01.117 1.993L15 7h-2v1.758a4.49 4.49 0 012.033-.734l.24-.018L15.5 8a4.5 4.5 0 014.5 4.5 4.504 4.504 0 01-4.064 4.478l-.217.016L15.5 17h-7a4.5 4.5 0 112.501-8.241L11 7H9a1 1 0 01-.117-1.993L9 5h2V3a1 1 0 011-1zm6 16H6a1 1 0 00-1 1 2 2 0 002 2h10a2 2 0 001.987-1.768l.011-.174A1 1 0 0018 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChessKingFilledIcon;
/* prettier-ignore-end */
