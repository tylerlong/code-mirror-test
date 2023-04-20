import { EditorView, basicSetup } from 'codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { Compartment } from '@codemirror/state';

const compartment = new Compartment();

const view = new EditorView({
  doc: 'Hello world!',
  extensions: [basicSetup, compartment.of(oneDark)],
  parent: document.body,
});

setTimeout(
  () =>
    view.dispatch({
      effects: compartment.reconfigure([]),
    }),
  1000,
);
