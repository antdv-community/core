import { createStyles } from 'antdv-style'

export const useStyles = createStyles(({ token, css }) => {
  return {
    btn: css`
      background-color: ${token.colorPrimary};
      font-size: 24px;
      color: ${token.colorTextBase};
    `,
  }
})
