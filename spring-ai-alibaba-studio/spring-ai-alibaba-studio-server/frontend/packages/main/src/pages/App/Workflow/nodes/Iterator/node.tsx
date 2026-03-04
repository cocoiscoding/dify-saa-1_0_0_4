import type { IWorkFlowNode, NodeProps } from '@agentscope-ai/flow';
import { GroupNode } from '@agentscope-ai/flow';
import { memo } from 'react';

export default memo(function IteratorNode(props: NodeProps<IWorkFlowNode>) {
  return <GroupNode {...props} />;
});
