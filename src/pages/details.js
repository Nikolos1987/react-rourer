import { useParams, useLocation } from "react-router-dom"
export function Details() {
    const params = useParams()
    const { state } = useLocation()
    console.log('location', state);
    const keyses = Object.keys(state)
    const values=Object.values(state)
    const listItems = keyses.map((number) =>
        <li>{number}</li>
    );
    return (
        <div style={{display:'flex'}}>
            <div>
                {keyses.map((num) => <div>{num}</div>)}
            </div>
            <div>
                {values.map((num) => <div>{num}</div>)}
            </div>
        </div>
    )
}