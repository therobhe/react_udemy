/**
 * Import subcomponents
 */
import TabMenu from "./TabMenu";
import Section from "./Section";

/**
 * Import data
 */
import {EXAMPLES} from "../data/data";

/**
 * Import hooks
 */
import {useState} from "react";
import TabButton from "./TabButton";

/**
 * Examples view
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Examples() {
    const [ activeTab, setActiveTab ] = useState();

    function handleSelect(newActiveTab) {
        setActiveTab(newActiveTab);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (activeTab) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[activeTab].title}</h3>
                <p>{EXAMPLES[activeTab].description}</p>
                <pre>
                    <code>{EXAMPLES[activeTab].code}</code>
                </pre>
            </div>
    }

    return (
        <Section id="examples">
            <h2>Examples</h2>
            <TabMenu
                // ContainerElement="ul", this would override the default prop
                buttons={
                <>
                    <TabButton
                        onClick={() => {
                            handleSelect('components')
                        }}
                        isSelected={activeTab === 'components'}
                    >
                        COMPONENTS
                    </TabButton>
                    <TabButton
                        onClick={() => {
                            handleSelect('jsx')
                        }}
                        isSelected={activeTab === 'jsx'}
                    >
                        JSX
                    </TabButton>
                    <TabButton
                        onClick={() => {
                            handleSelect('props')
                        }}
                        isSelected={activeTab === 'props'}

                    >
                        PROPS
                    </TabButton>
                    <TabButton
                        onClick={() => {
                            handleSelect('state')
                        }}
                        isSelected={activeTab === 'state'}
                    >
                        STATE
                    </TabButton>
                </>
            }>
                {tabContent}
            </TabMenu>
        </Section>
    );
}

export default Examples;