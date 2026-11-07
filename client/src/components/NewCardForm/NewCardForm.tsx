import styles from "./NewCardForm.module.css";

export function NewCardForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title")?.toString().trim();

        if (!title) {
            return;
        }

        console.log("Создаем карточку:", title);
        e.currentTarget.reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.input} 
                name="title"
                placeholder="Название карточки" 
                required
            />
            <button className={styles.button} type="submit">
                Добавить
            </button>
        </form>
    );
}
