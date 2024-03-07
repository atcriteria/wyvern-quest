/* eslint-disable react/prop-types */
import "./stat.css"

export default function Stat({ data, ind }) {
    return (
        <div className="stats-item">
            <p className="ind">{ind}</p>
            <img src={data["image"]} alt={data["name"]} />
            <p className="name">{data["name"]}</p>
            <p className="race">{data["race"]}</p>
            <p className="guild">{data["guild"]}</p>
            <p className="description">{data["description"]}</p>
            <p className="time">{data["time"]}</p>
        </div>
    )
}