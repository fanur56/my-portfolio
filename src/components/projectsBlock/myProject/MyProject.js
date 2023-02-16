import style from "./MyProject.module.css"

export const MyProject = (props) => {
    return (
        <div className={style.project}>
            <div className={style.myProject}>
                <div className={style.imageBlock}>
                    <a href="src/components/projectsBlock/myProject">
                        <div className={style.linkToWatch}>Смотреть</div>
                    </a>
                </div>

                <div className={style.description}>
                    <h4 className={style.descriptionTitle}>{props.descriptionTitle}</h4>
                    <span className={style.descriptionText}>
                        {props.descriptionText}
                    </span>
                </div>

            </div>
        </div>
    )
}