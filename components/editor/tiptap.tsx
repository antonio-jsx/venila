'use client';

import type { EventSchema } from '@/admin/create/schema';
import { Toolbar } from '@/components/editor/toolbar';
import { InputGroup } from '@/components/ui/input-group';
import { TextStyleKit } from '@tiptap/extension-text-style';
import Youtube from '@tiptap/extension-youtube';
import { Tiptap, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useFormContext } from 'react-hook-form';

const Editor = ({ value = '' }: { value?: string }) => {
  const { setValue } = useFormContext<EventSchema>();

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyleKit,
      Youtube.configure({ nocookie: true }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          'w-full min-w-full min-h-30 prose prose-sm prose-headings:font-normal prose-p:text-md prose-headings:my-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-blockquote:my-2 focus:outline-none p-4 py-1 dark:prose-invert',
      },
    },
    onUpdate({ editor }) {
      setValue('description', editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <Tiptap editor={editor}>
      <InputGroup>
        <Toolbar />

        <Tiptap.Content className="w-full" />
      </InputGroup>
    </Tiptap>
  );
};

export default Editor;
