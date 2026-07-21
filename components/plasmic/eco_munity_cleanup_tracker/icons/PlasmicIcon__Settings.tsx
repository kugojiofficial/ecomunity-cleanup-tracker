/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsIcon(props: SettingsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2m-8.5 2.877-1 .579a2 2 0 0 0-.733 2.732l1.489 2.578a2 2 0 0 0 2.734.734L7 18.916a1 1 0 0 1 1.008.011.99.99 0 0 1 .495.857V21a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1.218a1.01 1.01 0 0 1 1.5-.866l1.009.582a2 2 0 0 0 2.732-.732l1.488-2.578a2 2 0 0 0-.733-2.732l-1-.579a1.01 1.01 0 0 1-.5-.89 1 1 0 0 1 .5-.864l1-.579a2 2 0 0 0 .733-2.732l-1.49-2.578A2 2 0 0 0 18.01 4.5L17 5.083a1.008 1.008 0 0 1-1.5-.867V3a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1.294a.85.85 0 0 1-.428.74l-.154.089a.86.86 0 0 1-.854 0L5.99 4.5a2 2 0 0 0-2.733.732L1.769 7.813a2 2 0 0 0 .731 2.731l1 .578a1.01 1.01 0 0 1 .5.891 1 1 0 0 1-.5.864m1-3.487-1-.578 1.49-2.578 1.074.62a2.86 2.86 0 0 0 2.85 0l.154-.088A2.86 2.86 0 0 0 10.5 4.294V3h3v1.216a3.008 3.008 0 0 0 4.5 2.6l1.007-.582L20.5 8.812l-1 .578a3.024 3.024 0 0 0 0 5.219l1 .579-1.488 2.578L18 17.184a3.008 3.008 0 0 0-4.5 2.6V21h-3v-1.216a3.006 3.006 0 0 0-4.5-2.6l-1.007.582L3.5 15.188l1-.579a3.024 3.024 0 0 0 0-5.219"
        }
      ></path>
    </svg>
  );
}

export default SettingsIcon;
/* prettier-ignore-end */
