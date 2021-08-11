import {ThemeContext} from './index'

// 函数组件使用 ThemeContext.Consumer 进行消费
function ThemedButtonFuncConsumer() {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
          </button>
        )
      }
    </ThemeContext.Consumer>
  );

}

export default ThemedButtonFuncConsumer