import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
    name: string
    
    onclick?: () => void
}

export function Button({ name, onclick, ...rest }: Props) {
    return (
        <div>
            <button {...rest} type="button" onClick={onclick} className={styles.container}>{name}</button>
        </div>
    )
}