import * as React from 'react';
import { ThemeContext } from './ThemeContext';

export class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;

    render() {
        console.log(this.context);
        return <>
            <div>{this.context.theme.foreground}</div>
            <div>{this.context.theme.background}</div>
        </>;
    }
}
