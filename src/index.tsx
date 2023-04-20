import { EditorView, basicSetup } from 'codemirror';
import { oneDark } from '@codemirror/theme-one-dark';

const view = new EditorView({
  doc: 'Hello world!',
  extensions: [basicSetup, oneDark],
  parent: document.body,
});
