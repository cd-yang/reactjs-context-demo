import * as React from 'react';
import { ThemeContext } from './ThemeContext';

export class ThemedButton2 extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;

    render() {
        return <>
            <div>{this.context.theme.foreground}</div>
            <div>{this.context.theme.background}</div>
            <button onClick={this.context.toggleTheme}>
                Toggle Theme
            </button>
        </>;
    }
}
