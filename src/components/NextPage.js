import React from "react"


export const NextPage = ({out}) => {
    return(
        <div>
            Страница с контентом
            <input onClick={()=>{out()}} type='button' value="На главную"/>
        </div>
    )
}