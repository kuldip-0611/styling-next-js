import style from 'styled-components';

const title = style.h1`

    font-size: 3rem;
    color:${({theme})=>theme.color.primary}`

    

const inline_style = ()=>{
    return(
        <h1 style={{'color':'orange'}}>HIII</h1>
    )
}
export default inline_style