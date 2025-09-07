import './styles.css'

export default function Ordenacao({children, classe}){
    return(
        <button className={classe}>{children}</button>
    )
}