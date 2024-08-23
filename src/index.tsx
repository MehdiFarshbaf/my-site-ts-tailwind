import App from './App';
import {createRoot} from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";


// styles
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/styles.scss'
import './assets/styles/colors.scss'
import './assets/styles/fonts.scss'
import {AuthContextProvider} from "./contexts/context";

const root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <App/>
            <ToastContainer position="top-right" rtl={true} closeOnClick={true}/>
        </AuthContextProvider>
    </BrowserRouter>
);

