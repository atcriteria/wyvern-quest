/* eslint-disable react/prop-types */
export default function GuideLink({ guideName, guide }) {
    return (<li className="guideLink">
        <a href={guide[guideName]} target="_blank" rel="noreferrer" >{guideName}</a>
    </li>)
}