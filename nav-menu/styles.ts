import { makeStyles, tokens } from "@fluentui/react-components";

export const useNavMenuStyles = makeStyles({
    root: {
        padding: '0.5rem',
        width: 'max-context',
        fontSize: '1rem',
        backgroundColor: tokens.colorNeutralBackground2,
        '&  ul': {
            listStyle: 'none',
            marginBlockStart: 0,
            marginBlockEnd: 0,
            paddingLeft: 0,
        },
    },

    collapsed: {
        width: '25px',
    }
})