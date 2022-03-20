export const colorSwitch = (jsonColor) => {
    let color;

    switch(jsonColor) {
        case 'red':
            color = '#F05868'
            break;
        case 'gray':
            color = '#A0A0A0'
            break;
        case 'white':
            color = '#F0F0F0'
            break;
        case 'purple':
            color = '#A868C0'
            break;
        case 'green':
            color = '#40B868'
            break;
        case 'brown':
            color = '#B07030'
            break;
        case 'pink':
            color = '#F890C8'
            break;
        case 'black':
            color = '#585858'
            break;
        case 'blue':
            color = '#3088F0'
            break;
        case 'yellow':
            color = '#F0D048'
            break;
        default:
            color ='#585858'
    }

    return color
}

export const statsSwitch = (statName) => {
    let name;

    switch(statName) {
        case 'special-attack':
            name = 'special attack'
            break;
        case 'special-defense':
            name = 'especial defense'
            break;
        default:
            name = statName
    }

    return name;
}

        /*
        switch(json.color.name) {
            case 'red':
                setPokemonColor('#F05868')
                break;
            case 'gray':
                setPokemonColor('#A0A0A0')
                break;
            case 'white':
                setPokemonColor('#F0F0F0')
                break;
            case 'purple':
                setPokemonColor('#A868C0')
                break;
            case 'green':
                setPokemonColor('#40B868')
                break;
            case 'brown':
                setPokemonColor('#B07030')
                break;
            case 'pink':
                setPokemonColor('#F890C8')
                break;
            case 'black':
                setPokemonColor('#585858')
                break;
            case 'blue':
                setPokemonColor('#3088F0')
                break;
            case 'yellow':
                setPokemonColor('#F0D048')
                break;
            default:
                setPokemonColor('#585858')
        } */
