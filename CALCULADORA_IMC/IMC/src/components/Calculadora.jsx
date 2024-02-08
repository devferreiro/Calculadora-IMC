import { useState } from 'react'

import Button from "./Button"

import "./Calculadora.css"
const Calculadora = ({calcImc}) => {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const clearForm = (e)=>{
        e.preventDefault()
        setHeight("")
        setWeight("")

    }

    const validDigit = (text) =>{
        return text.replace(/[^0-9,]/g, "")

    }


    const handleHeightChange = (e) =>{
        const updatedValue = validDigit(e.target.value)
        setHeight(updatedValue)
        
    }
    const handleWeightChange = (e) =>{

        const updatedValue = validDigit(e.target.value)
        setWeight(updatedValue)

    }


    return (
        <div id="calculadora-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">

                    {/*form-altura */}
                    <div className="form-control">
                        <label htmlFor="height" className="form-label">Altura:</label>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Exemplo 1,70..."
                            onChange={(e) => handleHeightChange(e)} 
                            value={height}/>

                    </div>
                    {/*form-peso */}
                    <div className="form-control">
                        <label htmlFor="weight" className="form-label">Peso:</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="Exemplo 95..."
                            onChange={(e) => handleWeightChange(e)} 
                            value={weight}/>

                    </div>

                </div>

                <div className="action-control">
                    <Button id="calculadora-botao" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                    <Button id="calculadora-limpar" text="Limpar" action={clearForm} />

                </div>
            </form>
        </div>
    )
}

export default Calculadora