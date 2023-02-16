import style from "./Skills.module.css"
import {Skill} from "./skill/Skill";
import styleContainer from "../common/styles/Container.module.css"

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скиллы!</h2>
                <div className={style.mySkills}>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa enim"}/>
                    <Skill title= {"CSS"} description={" id ipsa neque pariatur qui reiciendis ullam voluptas voluptat"}/>
                    <Skill title={"React"} description={" ibus. Accusamus aut dolor ex minus, nam non nostrum perferendis voluptatem!"}/>
                </div>
            </div>


        </div>
    )
}