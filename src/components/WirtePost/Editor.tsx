import { Editor } from '@tinymce/tinymce-react';

const EditorComponent = (props: any) => {
  const { forwardedRef } = props;
  return <Editor {...props} ref={forwardedRef} />;
};

EditorComponent.displayName = 'Editor';
export default EditorComponent;
