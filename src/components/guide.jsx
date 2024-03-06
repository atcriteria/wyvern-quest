/* eslint-disable react/prop-types */
export default function Guide({ state }) {
    return (
        <div>
            <h2>{state["title"]}</h2>
            <p>Location: {state["location"]}</p>
            <p>About: {state["about"]}</p>
            <p>Level: {state["level"]}</p>
            <p>QP: {state["qp"]}</p>
            Rewards: {
                state["rewards"].map((r, i) => { return <div key={i}>{r}</div> })
            }
            Threats: {
                state["threats"].map((t, i) => { return <div key={i}>{t}</div> })
            }
            Tips: {
                state["tips"].map((t, i) => { return <div key={i}>{t}</div> })
            }
            Steps: {
                state["steps"].map((s, i) => { return <div key={i}>Step {i + 1}: {s}</div> })
            }
        </div>
    )
}