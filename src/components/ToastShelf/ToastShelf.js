import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ loaf, handleRemoveToast }) {
    if (loaf.length === 0) return

    return (
        <ol className={styles.wrapper}>
            {loaf.map((toast) => {
                return <li className={styles.toastWrapper} key={toast.id}>
                    <Toast variant={toast.variant} dismissToast={() => handleRemoveToast(toast)}>{toast.message}</Toast>
                </li>
            })}
        </ol>
    );
}

export default ToastShelf;
