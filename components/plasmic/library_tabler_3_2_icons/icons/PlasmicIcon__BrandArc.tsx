/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandArcIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandArcIcon(props: BrandArcIconProps) {
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
          "M4.687 14.694L3.7 16.797c-.502 1.07-.125 2.387.908 2.945 1.096.59 2.444.13 2.972-.995l.9-1.92m9.837-2.251c1.818-1.6 3.16-3.78 3.64-6.217.235-1.194-.525-2.351-1.695-2.586a2.14 2.14 0 00-1.625.326c-.478.323-.81.826-.922 1.398-.208 1.054-.695 2.037-1.366 2.872"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.68 12.759c-.42.104-.85.156-1.283.157-.336 0-.683-.04-1.03-.115-1.44-.31-2.89-1.215-3.709-2.315a3.7 3.7 0 01-.487-.853A2.157 2.157 0 003.353 8.42c-1.107.455-1.641 1.736-1.196 2.86.508 1.278 1.404 2.45 2.53 3.415a11.2 11.2 0 003.791 2.133c.953.31 1.942.483 2.916.483a9.8 9.8 0 003.162-.537"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.37 12.801l.943-2.013c.09-.19.357-.19.446 0l.923 1.97m0 0h.006m-.006 0l1.88 4.015.923 1.971a2.16 2.16 0 001.957 1.254c.193 0 .385-.027.576-.081 1.303-.365 1.92-1.887 1.339-3.129l-1.04-2.218-1.968-4.204m0 0l-.003.003m.003-.003l-2.862-6.112A2.16 2.16 0 0011.533 3C10.7 3 9.94 3.488 9.58 4.254l-2.92 6.232"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandArcIcon;
/* prettier-ignore-end */
