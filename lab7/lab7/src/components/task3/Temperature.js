export default function Temperature(props) {
    const t = props.t;
    let style;
    if (t < 0) {
        style = {color:"blue"};
    } else if (t > 0) {
        style = {color: "red" };
    } else {
        style = {};
    }  
    return (<span style={style}>{ t }</span>);
}