import * as React from "react";
import {
  PlasmicHStack,
  DefaultHStackProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicHStack";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface HStackProps extends DefaultHStackProps {}

function HStack_(props: HStackProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicHStack root={{ ref }} {...props} />;
}

const HStack = React.forwardRef(HStack_);
export default HStack;
