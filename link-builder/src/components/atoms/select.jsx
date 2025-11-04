
import styles from './select.module.css'

export default function Select({label, options, ...props}) {
    return (
        <>
            {label && <label className={styles.label} htmlFor={props.id}>{label}</label>}
            <select className = {styles[props.id]} {...props}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    )
}