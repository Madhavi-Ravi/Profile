import ReactDOM from 'react-dom';
import './fontawesome/css/fontawesome.min.css';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));