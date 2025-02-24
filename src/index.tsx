import { createRoot } from 'react-dom/client';

import App from './components/App';

import './reset.css';
import './styles.css';

const el = document.querySelector('#root') as HTMLElement;
const root = createRoot(el);
root.render(<App />);
