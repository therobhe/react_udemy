import CoreConcept from "./CoreConcept";
import Section from "./Section"

/**
 * Import data
 */
import { CORE_CONCEPTS } from "../data/data";

/**
 * CoreConcept view
 * @returns {JSX.Element}
 * @constructor
 */
function CoreConcepts() {
    return (
        <Section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((entry, index) => (
                    <CoreConcept {...entry} key={index}/>
                ))}
            </ul>
        </Section>
    );
}

export default CoreConcepts;