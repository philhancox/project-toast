import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const DEFAULT_MESSAGE = '';
const DEFAULT_VARIANT = VARIANT_OPTIONS[0]

function ToastPlayground() {
    const [message, setMessage] = React.useState(DEFAULT_MESSAGE)
    const [variant, setVariant] = React.useState(DEFAULT_VARIANT)
    const {addToast} = React.useContext(ToastContext)

    function handleSubmit(event) {
        event.preventDefault()
        addToast(message, variant)
        setMessage(DEFAULT_MESSAGE)
        setVariant(DEFAULT_VARIANT)
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf />

            <div className={styles.controlsWrapper}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                            style={{alignSelf: 'baseline'}}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => {
                                setMessage(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            {VARIANT_OPTIONS.map((v) => {
                                const variantId = `variant-${v}`
                                return <label htmlFor={variantId} key={variantId}>
                                    <input
                                        id={variantId}
                                        type="radio"
                                        name="variant"
                                        value={v}
                                        checked={v === variant}
                                        onChange={(e) => setVariant(e.target.value)}
                                    />
                                    {v}
                                </label>
                            })}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}/>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button>Pop Toast!</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToastPlayground;
