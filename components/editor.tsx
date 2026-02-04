'use client';

import type { EventSchema } from '@/admin/events/schema';
import { InputGroup } from '@/components/ui/input-group';
import { EditorToolbar } from './editor-toolbar';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyleKit } from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useFormContext } from 'react-hook-form';

const Editor = () => {
  const { setValue } = useFormContext<EventSchema>();

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyleKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class:
          'min-h-22 prose prose-sm prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-blockquote:my-2 focus:outline-none w-full p-4 py-1',
      },
    },
    onUpdate({ editor }) {
      setValue('description', editor.getHTML());
    },
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <InputGroup className="max-w-2xl">
      <EditorToolbar editor={editor} />

      <EditorContent className="w-full" editor={editor} />
    </InputGroup>
  );
};

export default Editor;
