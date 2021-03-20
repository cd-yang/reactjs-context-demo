import * as React from 'react';
import { ThemedButton } from './ThemedButton';
import { ThemedButton2 } from './ThemedButton2';

export default class Toolbar extends React.Component {
    render() {
        return <>
            <ThemedButton />
            <ThemedButton2 />
        </>;
    }
}