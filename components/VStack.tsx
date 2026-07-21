import * as React from "react";
import {
  PlasmicVStack,
  DefaultVStackProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicVStack";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface VStackProps extends DefaultVStackProps {}

function VStack_(props: VStackProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicVStack root={{ ref }} {...props} />;
}

const VStack = React.forwardRef(VStack_);
export default VStack;
