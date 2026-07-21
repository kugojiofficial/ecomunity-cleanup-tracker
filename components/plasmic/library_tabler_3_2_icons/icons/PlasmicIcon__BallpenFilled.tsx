/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallpenFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallpenFilledIcon(props: BallpenFilledIconProps) {
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
          "M17.828 2a3 3 0 011.977.743l.145.136 1.171 1.17a3 3 0 01.136 4.1l-.136.144L19.415 10l2.292 2.293a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L19.585 13l-1.586-1.585-7.464 7.464a3.828 3.828 0 01-2.474 1.114l-.233.008c-.674 0-1.33-.178-1.905-.508l-1.216 1.214a1 1 0 01-1.497-1.32l.083-.094 1.214-1.216a3.828 3.828 0 01.454-4.442l.16-.17L15.707 2.879a3 3 0 011.923-.873L17.828 2zm0 2a1 1 0 00-.608.206l-.099.087L15.414 6 18 8.585l1.707-1.706a1 1 0 00.284-.576l.01-.131a1 1 0 00-.207-.609l-.087-.099-1.171-1.171A1 1 0 0017.828 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BallpenFilledIcon;
/* prettier-ignore-end */
