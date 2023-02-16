import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Footer =()=>{
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerBlockWrapper}`}>
                <div className={style.footerBlockContent}>
                    <h4 className={style.header} >Ильясов Фанур</h4>
                    <div className={style.content}>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                    </div>
                    <p className={style.copyright}>2023 все права защищены</p>
                </div>
            </div>


        </div>
    )
}