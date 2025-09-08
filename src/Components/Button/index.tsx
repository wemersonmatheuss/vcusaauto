import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
    name: string;
};

export function Button({ name, ...rest }: Props) {
    
    const handleClick = () => {
        const phone = "17866893204";
        const message = "Olá, quero saber mais sobre o curso";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank"); // abre em nova aba
    };

    return (
        <div>
            <button 
                {...rest} 
                type="button"  
                className={styles.container} 
                onClick={handleClick}
            >
                {name}
            </button>
        </div>
    );
}
