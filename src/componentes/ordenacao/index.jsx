import './styles.css'

export default function Ordenacao({children, classe}){
    return(
        <h2 className={classe}>{children}</h2>
    )
}