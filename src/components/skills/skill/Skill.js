import style from "./Skill.module.css"

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.mySkill}>
                <div className={style.icon}>
                    <img src="src/components/skills/skill" alt=""/>
                </div>
                <h3>{props.title}</h3>
                <span className={style.description}>
                    {props.description}
                </span>
            </div>
        </div>
    )
}