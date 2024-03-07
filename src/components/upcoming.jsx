import "./upcoming.css"

export default function Upcoming() {
    return (
        <section>
            <h2>Upcoming Projects</h2>
            <p>Below are big-ticket items on my todo list, in no particular order.</p>
            <ul>
                <li>
                    <h3>
                        Wyvern-Quest
                    </h3>
                    <p>
                        Complete work on WQ, including actually styling the site so it looks halfway decent, creating back end services to host the database and api to interface with it, implement a more responsive design to make it workable on mobile.
                    </p>
                </li>
                <li>
                    <h3>Boss Tear Items</h3>
                    <p>
                        New assortment of items ranging between armors, weapons, and consumables. Comes with rebalancing of previous Tear items.
                    </p>
                </li>
                <li>
                    <h3>Legendary RD in-game implementation</h3>
                    <p>
                        A timed RD that requires players to defeat all monsters on a floor before progressing. Static number of floors. Rewards high tier loot and boss tears.
                    </p>
                </li>
                <li>
                    <h3>Melee combat enhancements -- dodge, accuracy, healing, itemization</h3>
                    <p>
                        Melee combat is overdue for some attention, specifically regarding dodge and accuracy. Healing will also likely be altered, specifically potions and how much immediate benefit they give. Will introduce broader armor itemization and monster rebalances to compensate for the change in dynamic.
                    </p>
                </li>
                <li>
                    <h3>Cloak And Dagger - Chapter 2</h3>
                    <p>
                        CAD players will meet with Risky and the person of interest they uncovered in Blackrose. HG players will report into Blackrose and begin their investigation.
                    </p>
                </li>
                <li>
                    <h3>Havishfel Redesign</h3>
                    <p>
                        The Dragon City is much too vast with not that much to do. This redesign will see some major changes in certain maps and receive additional content and training areas.
                    </p>
                </li>
                <li>
                    <h3>New Dungeon</h3>
                    <p>
                        A strange temple teeming with life has been uncovered deep in the barren wastelands of the southern continent. What secrets await?
                    </p>
                </li>
                <li>
                    <h3>Fields of Valor Quest</h3>
                    <p>
                        Many factions battle for control over the Fields of Valor. Prove your strength against each faction in such a way as to impress those overseeing the Fields.
                    </p>
                </li>
                <li>
                    <h3>Random Stuff</h3>
                    <p>
                        FinalForm wants a vape pen
                    </p>
                </li>
            </ul>
        </section>
    )
}