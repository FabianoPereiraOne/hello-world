import { useScrollLeft } from "../../../hooks/useScrollLeft"
import './styles.css'

export const Button = ({ text }: { text: string }) => {
 return <button className="button_next" onClick={useScrollLeft}>{text}</button>
}