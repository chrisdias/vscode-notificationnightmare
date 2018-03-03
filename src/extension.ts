'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {


    await vscode.window.showInformationMessage('Hello There!', 'Hi');
    await vscode.window.showInformationMessage('This extension has been updated, read the README?', 'Yes', 'No', 'Later');
    await vscode.window.showInformationMessage('C\'mon, read it, it is very important', 'OK', 'OK');
    vscode.window.showInformationMessage('VS Code has been updated, do you want to restart to install?', 'Heck Yeah!');
    vscode.window.showInformationMessage('We recommend you install the C# extension!', 'Show Recommendations', 'Never Show Again');
    vscode.window.showInformationMessage('We recommend you install the PHP extension!', 'Show Recommendations', 'Never Show Again');
    vscode.window.showInformationMessage('We recommend you install the C++ extension!', 'Show Recommendations', 'Never Show Again');
    vscode.window.showInformationMessage('We recommend you install the Ruby extension!', 'Show Recommendations', 'Never Show Again');
    setTimeout(() => {
        vscode.window.showInformationMessage('I just wanted to let you know I am still here', 'Call me');
    }, 10000);



}

// this method is called when your extension is deactivated
export function deactivate() {
}