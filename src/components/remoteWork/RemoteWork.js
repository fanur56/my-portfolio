import style from "./RemoteWork.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const RemoteWork=()=>{
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`} >
                <h4>Рассматриваю варианты удаленной работы</h4>
                <a href="src/components/remoteWork">
                    <div className={style.toHire}>Нанять меня</div>
                </a>
            </div>

        </div>
    )
}