import type { IWorkFlowNode, NodeProps } from '@agentscope-ai/flow';
import { BaseNode } from '@agentscope-ai/flow';
import { memo } from 'react';

export default memo(function StartNode(props: NodeProps<IWorkFlowNode>) {
  return <BaseNode disableShowTargetHandle {...props}></BaseNode>;
});
