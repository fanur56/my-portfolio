import style from "./Greetings.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const Greetings = () => {
    return (
        <div className={style.greetings}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Фанур</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={style.photo}>
                    <img src="src/components/greetings" alt=""/>
                </div>
            </div>
        </div>
    )
}