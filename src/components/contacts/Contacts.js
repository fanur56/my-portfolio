import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsBlockWrapper}`}>
                <div className={style.contactsBlockContent}>
                    <h4>Контакты</h4>
                    <div className={style.contactsForm}>
                        <form action="src/components/contacts">
                            <input type="text"/>
                            <input type="text"/>
                            <textarea name="" id="">
                            </textarea>
                        </form>
                    </div>
                    <div className={style.submitForm}>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}