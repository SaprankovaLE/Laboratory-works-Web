export default function OnlyEven(props) {
    let evens = [];
    
    props.arr.forEach(element => {
        if(element % 2 === 0) {
            evens.push(<span>{ element }, </span>);
        }
    });

    return(<span>[{ evens }]</span>);
}