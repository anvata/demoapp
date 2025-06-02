import { makeStyles, tokens } from "@fluentui/react-components";

export const useMenuLinkStyles = makeStyles({
    root: {
        listStyle: 'none',
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '10px',
        color: tokens.colorNeutralForeground1,
        textDecoration: 'none',
        textWrap: 'nowrap',
        ":hover": {
            color: tokens.colorBrandForeground1
        },
    },
    selected: {
        color: tokens.colorBrandForeground1,
        fontWeight: 600,
    },
    icon: {
        fontSize: '1.5rem',
    },
    label: {
        alignSelf: 'self-start'
    },
})

