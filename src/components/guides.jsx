import { GUILD_QUEST_LINKS, DUNGEON_LINKS, QUEST_LINKS } from "../util/guides";
import GuideLink from "./guideLink";
import "./guides.css"

export default function Guides() {

    return (
        <section className="guides-wrapper">
            <h2>Notable Guides</h2>
            <p>The following is a collection of useful guides maintained on the <a href="https://wiki.wyvernsource.com" target="_blank" rel="noreferrer">Wyvern Wiki</a>.</p>
            <div className="guides-container">
                <div>
                    <h3>Quests</h3>
                    <ul>
                        {Object.keys(QUEST_LINKS).map((key, ind) => <GuideLink key={ind} guideName={key} guide={QUEST_LINKS} />)}
                    </ul>
                </div>
                <div>
                    <h3>Guild Quests</h3>
                    <ul>
                        {Object.keys(GUILD_QUEST_LINKS).map((key, ind) => <GuideLink key={ind} guideName={key} guide={GUILD_QUEST_LINKS} />)}
                    </ul>
                </div>
                <div>
                    <h3>Dungeons</h3>
                    <ul>
                        {Object.keys(DUNGEON_LINKS).map((key, ind) => <GuideLink key={ind} guideName={key} guide={DUNGEON_LINKS} />)}
                    </ul>
                </div>
            </div>
        </section>
    )
}