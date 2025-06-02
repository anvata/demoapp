import { makeStyles, tokens } from "@fluentui/react-components"

export const useMenuGroupStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '&  ul': {
            listStyle: 'none',
            marginBlockStart: 0,
            marginBlockEnd: 0,
            paddingLeft: 0,
        },
    },

    menuHeaderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '10px',
        cursor: 'pointer',
        paddingTop: tokens.spacingHorizontalXXS,
        paddingBottom: tokens.spacingHorizontalXXS,
    },
    menuHeader: {
        display: 'flex',
        columnGap: '10px',
        justifyContent: 'space-between',
        flexGrow: '1',
    },
    selected: {
        color: tokens.colorBrandForeground1,
        fontWeight: 600,
    },
    popupContent: {
        padding: tokens.spacingHorizontalS,
    },
    subMenuHeader: {
        fontSize: '1.2rem',
        textAlign: 'center',
        marginLeft: '10px',
        padding: tokens.spacingHorizontalS
    },

    icon: {
        fontSize: '1.5rem',
    },
    collapsed: {
        display: 'none',
    }

});