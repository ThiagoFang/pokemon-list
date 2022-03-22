import { useState, useEffect } from 'react'
import { statsSwitch } from '../../helpers/colorSwitch';
import { useParams } from 'react-router-dom'

import { PokeStatArea } from "./styled";

export const PokeStat = ({ data }) => {
    const { name } = useParams()

    const [pokeStats, setPokeStats] = useState(0)
    const [barWidth, setBarWidth] = useState(0)
    const [catName, setCatName] = useState('')

    useEffect(()=>{
        setPokeStats(data.base_stat)
    },[name])

    useEffect(()=>{
        const statMaxWidth = 200;
        const statDataWidth = pokeStats
        const calcWidth = (statDataWidth * 100) / statMaxWidth

        setTimeout(()=>{
            setBarWidth(0)
            setBarWidth(`${calcWidth}%`)
        }, 50)     
    },[pokeStats])

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