
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import {BrowserRouter} from 'react-router-dom'
// register Swiper custom elements
register();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
       
    </Provider>
)
