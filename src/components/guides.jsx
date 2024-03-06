import { useState } from "react"
import { GUIDES } from "../util/guides";
import Guide from "./guide";

export default function Guides() {
    const [guideState, setGuideState] = useState(undefined);

    const handleClick = e => {
        e.preventDefault
        console.log(e.target.name)
        console.log(GUIDES[e.target.name])
        setGuideState(GUIDES[e.target.name])
    }
    return (
        <section>
            Select a guide below to view it.
            <a name="demon-hordes" onClick={handleClick}>Demon Hordes</a>
            <div>
                {
                    (guideState == undefined) ? "" : <Guide state={guideState} />
                }
            </div>
        </section>
    )
}