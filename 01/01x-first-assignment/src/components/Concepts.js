import Card from "./UI/Card";

/**
 * Concept - the wrapper component of the single concept-cards
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Concepts(props) {
    const conceptData = props.data;

    return (
        <ul id="concepts">
            {conceptData.map((entry, index) => {
               return (
                   <Card key={index}>
                       <img src={entry.image} alt={entry.title} />
                       <h2>{entry.title}</h2>
                       <p>{entry.description}</p>
                       {/* Outsourcing into ConceptItem would be also fine */}
                   </Card>
               );
            })}
        </ul>
    );
}

export default Concepts;