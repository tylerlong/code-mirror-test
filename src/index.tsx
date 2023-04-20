import { EditorView, basicSetup } from 'codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { Compartment } from '@codemirror/state';

const compartment = new Compartment();

const view = new EditorView({
  doc: 'Hello world!',
  extensions: [basicSetup, compartment.of(oneDark)],
  parent: document.body,
});

let count = 0;
setInterval(() => {
  count += 1;
  view.dispatch({
    effects: compartment.reconfigure(count % 2 === 1 ? [] : oneDark),
  });
}, 1000);
