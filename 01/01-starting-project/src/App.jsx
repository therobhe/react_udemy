/**
 * Import hooks
 */
import { useState } from "react";

/**
 * Import components
 */
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

/**
 * Import data
 */
import { CORE_CONCEPTS } from "./data/data";
import { EXAMPLES } from "./data/data";

function App() {
    const [ activeTab, setActiveTab ] = useState();

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

    function handleSelect(newActiveTab) {
        setActiveTab(newActiveTab);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <ul>
                        {CORE_CONCEPTS.map((entry, index) => (
                            <CoreConcept {...entry} key={index} />
                        ))}
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            onSelect={() => { handleSelect('components') }}
                            isSelected={activeTab === 'components'}
                        >
                            COMPONENTS
                        </TabButton>
                        <TabButton
                            onSelect={() => { handleSelect('jsx') }}
                            isSelected={activeTab === 'jsx'}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            onSelect={() => { handleSelect('props') }}
                            isSelected={activeTab === 'props'}

                        >
                            PROPS
                        </TabButton>
                        <TabButton
                            onSelect={() => { handleSelect('state') }}
                            isSelected={activeTab === 'state'}
                        >
                            STATE
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;