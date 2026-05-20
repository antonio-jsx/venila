import { InputGroupAddon, InputGroupButton } from '@/components/ui/input-group';
import type { Editor } from '@tiptap/react';
import { useTiptap, useTiptapState } from '@tiptap/react';
import {
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  QuoteIcon,
  UnderlineIcon,
  YoutubeIcon,
} from 'lucide-react';

type ToolbarButton = {
  icon: React.ReactNode;
  label: string;
  stateKey: string;
  isActive: (editor: Editor) => boolean;
  onClick: (editor: Editor) => void;
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
    icon: <ListIcon />,
    label: 'Bullet list',
    stateKey: 'bulletList',
    isActive: (e) => e.isActive('bulletList'),
    onClick: (e) => e.chain().focus().toggleBulletList().run(),
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
    icon: <YoutubeIcon />,
    label: 'Youtube',
    stateKey: 'youtube',
    isActive: (e) => e.isActive('youtube'),
    onClick: (e) => {
      const url = prompt('https://www.youtube.com/watch?v=');
      if (url) {
        e.commands.setYoutubeVideo({ src: url });
      }
    },
  },
];

export const Toolbar = () => {
  const { editor } = useTiptap();
  const activeStates = useTiptapState(({ editor }) =>
    Object.fromEntries(
      toolbarButtons.map((button) => [button.stateKey, button.isActive(editor)])
    )
  );

  return (
    <InputGroupAddon
      align="block-start"
      className="gap-1.5 border-b [--spacing:0.25rem]"
    >
      {toolbarButtons.map((button) => (
        <InputGroupButton
          aria-label={button.label}
          className="data-[active=true]:bg-input"
          data-active={activeStates[button.stateKey]}
          key={button.label}
          onClick={() => button.onClick(editor)}
        >
          {button.icon}
        </InputGroupButton>
      ))}
    </InputGroupAddon>
  );
};
