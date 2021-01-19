import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Toast {
    static toastMessage(message, option) {
        return toast[option](message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}
