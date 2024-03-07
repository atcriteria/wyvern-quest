/*
    Renders the LRD Stats here
*/

import { DUMMY_LRD_DATA } from "../util/dummyData"
import Stat from "./stat"
import "./stats.css"

export default function Stats() {
    return (
        <section>
            <h2>Legendary RD Leaderboard!</h2>
            <p>
                Below are those who have conquered the Legendary RD as well as their times. You must complete the dungeon in less than 30 minutes to be eligible for this board.
            </p>
            <div className="stats-wrapper">
                <div className="stats-container">
                    {
                        DUMMY_LRD_DATA.map((d, i) => {
                            return <Stat data={d} key={i} ind={i + 1} />
                        })
                    }
                </div>
            </div>

        </section>
    )
}