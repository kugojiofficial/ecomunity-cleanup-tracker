/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessQueenFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessQueenFilledIcon(props: ChessQueenFilledIconProps) {
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
          "M12 2a2 2 0 011.572 3.236l.793 1.983 1.702-1.702a2.003 2.003 0 013.222-2.048 2 2 0 01-.615 3.415l-1.69 9.295a1 1 0 01-.865.814L16 17H8a1 1 0 01-.956-.705l-.028-.116-1.69-9.295a2 2 0 112.607-1.367l1.701 1.702.794-1.983A2 2 0 0112 2zm6 16H6a1 1 0 00-1 1 2 2 0 002 2h10a2 2 0 001.987-1.768l.011-.174A1 1 0 0018 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChessQueenFilledIcon;
/* prettier-ignore-end */
