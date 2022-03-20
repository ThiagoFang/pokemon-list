import { useState, useEffect } from 'react'
import { statsSwitch } from '../../helpers/colorSwitch';

import { PokeStatArea } from "./styled";

export const PokeStat = ({ data }, key, prop) => {
    const [barWidth, setBarWidth] = useState(0)
    const [catName, setCatName] = useState('')

    useEffect(()=>{
        const statMaxWidth = 200;
        const statDataWidth = data.base_stat
        const calcWidth = (statDataWidth * 100) / statMaxWidth

        setTimeout(()=>{
            setBarWidth(`${calcWidth}%`)
        }, 500)     
    },[])

    useEffect(()=>{
        const namesSwich = statsSwitch(data.stat.name)
        setCatName(namesSwich)
    },[])

    return(
        <PokeStatArea>
            <h3>{catName}</h3>
            <div className="stat-bar">
                <div style={{width: barWidth}} className="stat-bar-progression"></div>
            </div>
        </PokeStatArea>
    )
}