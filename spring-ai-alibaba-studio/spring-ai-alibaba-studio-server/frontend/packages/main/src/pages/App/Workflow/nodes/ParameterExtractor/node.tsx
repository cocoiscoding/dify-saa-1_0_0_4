import type { IWorkFlowNode, NodeProps } from '@agentscope-ai/flow';
import { BaseNode } from '@agentscope-ai/flow';
import { memo } from 'react';

export default memo(function ParameterExtractorNode(
  props: NodeProps<IWorkFlowNode>,
) {
  return <BaseNode {...props}></BaseNode>;
});
