// @ts-nocheck
import { PropType, registerComponent } from '@uiflow/cli';

export default registerComponent('my-navigate-component', {  
  name: 'Navigate Back',  
  blocks: [
    {
      input: {
        type: PropType.Call,
        name: 'back',
        arguments: [],
        onEmit({ inputs, emit }) {
          history.back();
        },
      }
    }
  ]
});