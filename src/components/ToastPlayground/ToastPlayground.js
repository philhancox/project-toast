import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const DEFAULT_MESSAGE = '';
const DEFAULT_VARIANT = VARIANT_OPTIONS[0]

function ToastPlayground() {
    const [message, setMessage] = React.useState(DEFAULT_MESSAGE)
    const [variant, setVariant] = React.useState(DEFAULT_VARIANT)
    const [loaf, setLoaf] = React.useState([])

    function addToast(event) {
        event.preventDefault()
        const toast = {
            message,
            variant,
            id: crypto.randomUUID()
        }
        setLoaf([...loaf, toast])
        setMessage(DEFAULT_MESSAGE)
        setVariant(DEFAULT_VARIANT)
    }

    function removeToast(toast) {
        setLoaf(loaf.filter((slice) => {
            return slice.id !== toast.id
        }))
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf loaf={loaf} handleRemoveToast={(toast) => removeToast(toast)}/>

            <div className={styles.controlsWrapper}>
                <form onSubmit={(event) => addToast(event)}>
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
