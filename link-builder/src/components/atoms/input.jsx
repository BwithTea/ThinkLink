import styles from './input.module.css'

export default function Input({label,type="text", ...props}) {
    return (
        <>
            {label && <label className={styles.label} htmlFor={props.id}>{label}</label>}
            <input className={styles[props.id]} type={type} {...props}></input>
        </>
    )
}