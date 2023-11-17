import { createStyles } from 'antdv-style'

export const useStyles = createStyles(({ token, css }) => {
  return {
      list: css({
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '266.66px',
          border: `${token.lineWidth}px solid ${token.colorBorder}`,
          borderRadius: `${token.borderRadius}px`,
          padding: `${token.paddingSM}px`,
          marginBottom: '10px',
          'li': {
            width: '20%',
            textAlign: 'center',
            color: `${token.colorIcon}`,
            '&:hover': {
              color: `${token.colorIconHover}`,
              backgroundColor: `${token.colorBgTextActive}`,
              borderRadius: `${token.borderRadius}px`,
            }
        }
      })
  }
})
