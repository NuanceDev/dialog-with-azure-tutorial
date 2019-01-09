# dialog with azure tutorial

This git repository contains all the Azure functions used in the coffee maker example dialog.
Due to the ability of Azure to create continuous deployment from most development platform (Github,
 Bitbucket, etc.) we suggest that you simply *fork* this repo in your own namespace.

## How to use

### Pre-requisites
- An account on GitHub
- An account on Azure and a valid subscription

### How to deploy on Azure

1. Fork this project in your own namespace.
2. Create a Function App resource https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function
    * You don't need to Create an HTTP triggered function
3. Link your GitHub project to the newly created Azure Function https://docs.microsoft.com/en-us/azure/azure-functions/functions-continuous-deployment#set-up-continuous-deployment
4. In the *Deployment Center* press *Sync* and wait for the Azure Function App to be deployed.
5. Validate that you have a list of Functions

### How to link with a Mix Dialog project

TODO, document this section once the UI code is done.
For now the code is running here https://mixbeta.labs.nuance.com/#/projects/25517/details

### How to develop

The easiest way to develop is simply to set the Function App edit mode to `Read/Write` and develop directly in the Azure web code editor.
