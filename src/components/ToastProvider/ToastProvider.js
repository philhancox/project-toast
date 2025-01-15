import React from 'react';
import useEscapeKey from "../../hooks/handleEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [loaf, setLoaf] = React.useState([])

  function addToast(message, variant) {
    const toast = {
      message,
      variant,
      id: crypto.randomUUID()
    }
    setLoaf([...loaf, toast])
  }

  function removeToast(toast) {
    setLoaf(loaf.filter((slice) => {
      return slice.id !== toast.id
    }))
  }

  const handleEscape = React.useCallback(() => {
    setLoaf([]);
  }, []);

  useEscapeKey(handleEscape);

  return <ToastContext.Provider value={{ loaf, addToast, removeToast }}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
