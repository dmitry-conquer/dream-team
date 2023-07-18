import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export function useToast() {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    type: toast.TYPE.DEFAULT,
    closeOnClick: true,
    autoClose: 2000,
    hideProgressBar: true,
    theme: toast.THEME.DARK,
    transition: toast.TRANSITIONS.BOUNCE,
  };
  return { toast, toastOptions };
}
