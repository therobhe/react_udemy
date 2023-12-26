/**
 * TabMenu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TabMenu({ children, buttons, ContainerElement = "menu" }) {
    return (
        <>
            <ContainerElement>
                {buttons}
            </ContainerElement>
            {children}
        </>
    );
}

export default TabMenu;