/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AssemblyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AssemblyFilledIcon(props: AssemblyFilledIconProps) {
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
          "M13.666 1.429l6.75 3.98c.067.04.127.084.18.133l.009.008.106.075a3.22 3.22 0 011.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 012 15.502V8.217a3.21 3.21 0 011.65-2.808l6.775-3.995a3.34 3.34 0 013.24.015m-.64 5.343a2.03 2.03 0 00-2-.014L8.002 8.562A1.99 1.99 0 007 10.298v3.278a2 2 0 001.03 1.75l2.946 1.89c.657.367 1.39.367 1.994.033l3.054-1.955c.582-.322.976-.992.976-1.719v-3.277l-.005-.164a2.002 2.002 0 00-.725-1.391l-.092-.07-.056-.047a.996.996 0 00-.096-.064l-3.001-1.79z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AssemblyFilledIcon;
/* prettier-ignore-end */
