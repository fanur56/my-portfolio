import style from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="src/components/header/nav">Главная</a>
            <a href="src/components/header/nav">Скиллы</a>
            <a href="src/components/header/nav">Проекты</a>
            <a href="src/components/header/nav">Контакты</a>
            <a href="src/components/header/nav"></a>
        </div>
    )
}