'use client';

import { InputGroupAddon, InputGroupButton } from '@/ui/input-group';
import type { Editor } from '@tiptap/react';
import { useEditorState } from '@tiptap/react';
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  ListOrderedIcon,
  QuoteIcon,
  UnderlineIcon,
} from 'lucide-react';

type ToolbarButton = {
  icon: React.ReactNode;
  label: string;
  stateKey: string;
  isActive: (editor: Editor) => boolean;
  onClick: (editor: Editor) => void;
};

type EditorToolbarProps = {
  editor: Editor;
};

const toolbarButtons: ToolbarButton[] = [
  {
    icon: <BoldIcon />,
    label: 'Bold',
    stateKey: 'bold',
    isActive: (e) => e.isActive('bold'),
    onClick: (e) => e.chain().focus().toggleBold().run(),
  },
  {
    icon: <ItalicIcon />,
    label: 'Italic',
    stateKey: 'italic',
    isActive: (e) => e.isActive('italic'),
    onClick: (e) => e.chain().focus().toggleItalic().run(),
  },
  {
    icon: <UnderlineIcon />,
    label: 'Underline',
    stateKey: 'underline',
    isActive: (e) => e.isActive('underline'),
    onClick: (e) => e.chain().focus().toggleUnderline().run(),
  },
  {
    icon: <ListOrderedIcon />,
    label: 'Ordered list',
    stateKey: 'orderedList',
    isActive: (e) => e.isActive('orderedList'),
    onClick: (e) => e.chain().focus().toggleOrderedList().run(),
  },
  {
    icon: <QuoteIcon />,
    label: 'Blockquote',
    stateKey: 'blockquote',
    isActive: (e) => e.isActive('blockquote'),
    onClick: (e) => e.chain().focus().toggleBlockquote().run(),
  },
  {
    icon: <AlignLeftIcon />,
    label: 'Align left',
    stateKey: 'alignLeft',
    isActive: (e) => e.isActive({ textAlign: 'left' }),
    onClick: (e) => e.chain().focus().setTextAlign('left').run(),
  },
  {
    icon: <AlignCenterIcon />,
    label: 'Align center',
    stateKey: 'alignCenter',
    isActive: (e) => e.isActive({ textAlign: 'center' }),
    onClick: (e) => e.chain().focus().setTextAlign('center').run(),
  },
  {
    icon: <AlignRightIcon />,
    label: 'Align right',
    stateKey: 'alignRight',
    isActive: (e) => e.isActive({ textAlign: 'right' }),
    onClick: (e) => e.chain().focus().setTextAlign('right').run(),
  },
];

export const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const activeStates = useEditorState({
    editor,
    selector: ({ editor }) =>
      Object.fromEntries(
        toolbarButtons.map((button) => [
          button.stateKey,
          button.isActive(editor),
        ])
      ),
  }) as Record<string, boolean>;

  return (
    <InputGroupAddon
      align="block-start"
      className="gap-1 border-b [--spacing:0.25rem]"
    >
      {toolbarButtons.map((button) => (
        <InputGroupButton
          key={button.label}
          size="icon-xs"
          aria-label={button.label}
          data-active={activeStates[button.stateKey]}
          onClick={() => button.onClick(editor)}
          className="data-[active=true]:bg-muted data-[active=true]:text-primary"
        >
          {button.icon}
        </InputGroupButton>
      ))}
    </InputGroupAddon>
  );
};
