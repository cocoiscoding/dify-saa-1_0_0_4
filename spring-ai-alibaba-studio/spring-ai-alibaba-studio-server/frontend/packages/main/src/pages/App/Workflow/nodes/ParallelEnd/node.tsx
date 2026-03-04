import type { IWorkFlowNode, NodeProps } from '@agentscope-ai/flow';
import { BaseNode } from '@agentscope-ai/flow';
import { memo } from 'react';

export default memo(function ParallelEndNode(props: NodeProps<IWorkFlowNode>) {
  return <BaseNode disableAction disableShowSourceHandle {...props}></BaseNode>;
});
