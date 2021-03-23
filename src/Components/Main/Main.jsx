import React from 'react'
import s from './Main.module.css'

const Main = ({data} ) => {
    return (
        <div className={s.main}>
            <div className={s.container}>
            <div style={{ backgroundImage: `url(${data.img})` }} className={s.img}>
            
            </div>
            <div className={s.title}>
                {data.title}
            </div>
            <div className={s.text}>
                {data.text}
            </div>
            <div className={s.count}>
                <data className="count">
                    {data.count}
                </data>
            </div>
            <div className={s.pieces}>
                {data.pieces}
            </div>
            <button className={s.button}>
                    {data.button}
                </button>
            <div className={s.btn}>
                <div className={s.minus}>
                    {data.minus}
                </div>
                <input className={s.input} type="number" value='1'>
                    
                </input>
                <div className={s.plus}>
                    {data.plus}
                </div>
            </div>
            <button className={s.add}>
                {data.add}
            </button>
            </div>
        </div>
    )
}
export default Main