import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
    const { loaf, removeToast } = React.useContext(ToastContext);

    if (loaf.length === 0) return

    return (
        <ol className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >
            {loaf.map((toast) => {
                return <li className={styles.toastWrapper} key={toast.id}>
                    <Toast variant={toast.variant} dismissToast={() => removeToast(toast)}>{toast.message}</Toast>
                </li>
            })}
        </ol>
    );
}

export default ToastShelf;
