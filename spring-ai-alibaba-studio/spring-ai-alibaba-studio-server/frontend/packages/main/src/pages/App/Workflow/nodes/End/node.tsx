import type { IWorkFlowNode, NodeProps } from '@agentscope-ai/flow';
import { BaseNode } from '@agentscope-ai/flow';
import { memo } from 'react';

export default memo(function EndNode(props: NodeProps<IWorkFlowNode>) {
  return <BaseNode disableShowSourceHandle {...props}></BaseNode>;
});
