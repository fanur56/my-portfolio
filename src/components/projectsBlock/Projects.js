import {MyProject} from "./myProject/MyProject";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={styleContainer.container} >
                <div className={style.projects}>
                    <h3>Мои работы</h3>
                    <div className={style.myProjects}>
                        <MyProject descriptionText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet architecto labore laboriosam neque"}
                                   descriptionTitle={"Описание навыка"}/>
                        <MyProject descriptionText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                                   descriptionTitle={"Подробное писание навыка"}/>
                    </div>
                </div>
            </div>
        </div>

    )
}