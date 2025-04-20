'use client'

import { useState } from 'react';
import StarterKit from '@tiptap/starter-kit'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import CharacterCount from '@tiptap/extension-character-count'
import {TextBold, TextItalic, H1, H2, ListTwo, ListNumbers, Undo, Redo, ClearFormat, UploadOne} from '@icon-park/react';
import Placeholder from '@tiptap/extension-placeholder'
import { analyzeWithDeepSeek } from '../lib/analyze';

export default function TextEditor() {
  const MenuBar = () => {
    const { editor } = useCurrentEditor()
    if (!editor) {
      return null
    }

    const [isLoading, setIsLoading] = useState(false);
    const handleAnalyze = async () => {
      if (!editor) return;
  
      setIsLoading(true);
      try {
        const response = await analyzeWithDeepSeek(editor);
        console.log(response)
      } catch (error) {
        console.error('Analysis failed:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="fixed w-180 bottom-0 py-3 bg-nord0 z-10000 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-0.5 justify-between items-center">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={(editor.isActive('bold') ? 'bg-nord6 ' : 'hover:bg-nord1 ') + 'p-2 rounded-lg'}
          >
            <TextBold theme="outline" size="18" fill={editor.isActive('bold') ? '#2e3440' : '#eceff4'}/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={(editor.isActive('italic') ? 'bg-nord6 ' : 'hover:bg-nord1 ') + 'p-2 rounded-lg'}
          >
            <TextItalic theme="outline" size="18" fill={editor.isActive('italic') ? '#2e3440' : '#eceff4'}/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={(editor.isActive('heading', { level: 1 }) ? 'bg-nord6 ' : 'hover:bg-nord1 ') + 'p-2 rounded-lg'}
          >
            <H1 theme="outline" size="18" fill={editor.isActive('heading', { level: 1 }) ? '#2e3440' : '#eceff4'}/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={(editor.isActive('heading', { level: 2 }) ? 'bg-nord6 ' : 'hover:bg-nord1 ') + 'p-2 rounded-lg'}
          >
            <H2 theme="outline" size="18" fill={editor.isActive('heading', { level: 2 }) ? '#2e3440' : '#eceff4'}/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={(editor.isActive('bulletList') ? 'bg-nord6 ' : 'hover:bg-nord1 ') + 'p-2 rounded-lg'}
          >
            <ListTwo theme="outline" size="18" fill={editor.isActive('bulletList') ? '#2e3440' : '#eceff4'}/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={(editor.isActive('orderedList') ? 'bg-nord6 ' : 'hover:bg-nord1 ') + 'p-2 rounded-lg'}
          >
            <ListNumbers theme="outline" size="18" fill={editor.isActive('orderedList') ? '#2e3440' : '#eceff4'}/>
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
            className='p-2 rounded-lg hover:bg-nord1'
          >
            <Undo theme="outline" size="18" fill='#eceff4'/>
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
            className='p-2 rounded-lg hover:bg-nord1'
          >
            <Redo theme="outline" size="18" fill='#eceff4'/>
          </button>
          <button 
            onClick={() => editor.chain().focus().clearNodes().run()}
            className='p-2 rounded-lg hover:bg-nord1'
          >
            <ClearFormat theme="outline" size="18" fill='#eceff4'/>
          </button>
        </div>
        <p>{editor.storage.characterCount.words()} words</p>
        <button
          onClick={ handleAnalyze }
          className="p-2 rounded-lg hover:bg-nord1 flex items-center gap-2"
        >
          <UploadOne theme="outline" size="22" fill="#eceff4"/> Analyze
        </button>
      </div>
    )
  }
  
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      heading: {
        levels: [1, 2],
      },
    }),
    CharacterCount,
    Placeholder.configure({
      placeholder: 'Type or paste your text here to begin.',
      emptyEditorClass: 'before:content-[attr(data-placeholder)] before:float-left before:opacity-50 before:h-0 before:pointer-events-none',
    }),
  ]
  
  const testContent = `
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That’s a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
  </p>
  <pre><code class="language-css">body {
    display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
  `
  const content = '';

  return <EditorProvider 
            extensions={extensions} 
            content={content} 
            editorContainerProps={{ className: 'w-180' }}
            editorProps={{ 
              attributes: { 
                class: 'prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-nord6 prose-h1:text-3xl prose-h2:text-2xl prose-p:text-nord6 prose-strong:text-nord6 prose-em:text-nord6 prose-li:leading-2 focus:outline-none mb-20 h-full' 
              }
            }}
            slotBefore={<MenuBar />}
         ></EditorProvider>
}