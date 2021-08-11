import React from 'react'
import Toolbar from './Toolbar'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

// 定义 Context，参数是默认值，一般只在单元测试中用到
export const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    // 使用 ThemeContext.Provider 组件进行包裹，子组件就能消费 ThemeContext
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App