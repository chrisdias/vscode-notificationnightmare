'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    vscode.window.showInformationMessage('I just wanted to let you know I am still here', 'Please call me');
    vscode.window.showInformationMessage('Hello from the other side', 'Buy Now', 'Listen on Spotify');
    vscode.window.showInformationMessage('VS Code has been updated, do you want to restart to install?', 'Heck Yeah!');
    vscode.window.showInformationMessage('We recommend you install the C# extension!', 'Show Recommendations', 'Never Show Again');
    vscode.window.showInformationMessage('Are you sure you don\'t want to read the read me?', 'OK', 'No');
    vscode.window.showInformationMessage('Notifications Nightmare Readme has been updated, do you want to read it?', 'Yes', 'No', 'Later');
    vscode.window.showInformationMessage('Hello There!!!','Hi','There');

}

// this method is called when your extension is deactivated
export function deactivate() {
}