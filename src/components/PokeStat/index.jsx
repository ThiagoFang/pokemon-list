import { useState, useEffect } from 'react'

import { PokeStatArea } from "./styled";

export const PokeStat = ({ data }) => {
    const [barWidth, setBarWidth] = useState(0)

    useEffect(()=>{
        const statMaxWidth = 200;
        const statDataWidth = data.base_stat

        const calcWidth = (statDataWidth * 100) / statMaxWidth

        setTimeout(()=>{
            setBarWidth(`${calcWidth}%`)
        }, 500)     
    },[])
        
    return(
        <PokeStatArea>
            <h3>{data.stat.name}</h3>
            <div className="stat-bar">
                <div style={{width: barWidth}} className="stat-bar-progression"></div>
            </div>
        </PokeStatArea>
    )
}