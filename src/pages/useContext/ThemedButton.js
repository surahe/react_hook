
import {useContext} from 'react'
import {ThemeContext} from './index'

// 函数组件使用 useContext 进行消费
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default ThemedButton
