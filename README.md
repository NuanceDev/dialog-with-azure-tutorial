# dialog with azure tutorial

This git repository contains all the Azure functions used in the coffee maker example dialog.
Due to the ability of Azure to create continuous deployment from most development platform (Github,
 Bitbucket, etc.) we suggest that you simply _fork_ this repo in your own namespace.

## How to use

### Pre-requisites
- An account on GitHub
- An account on Azure and a valid subscription

### How to deploy on Azure

1. Fork this project in your own namespace.
2. Create a Function App resource. You can use the [Azure tutorial](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function) and stop before `Create an HTTP triggered function` section.
3. Follow the [Azure instructions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-continuous-deployment#set-up-continuous-deployment) to Link your GitHub project to the newly created Azure Function
4. In the *Deployment Center* press *Sync* and wait for the Azure Function App to be deployed.
5. Validate that the functions are properly running

```sh
  $ curl <your-function-app-name>.azurewebsites.net/api/v1/coffee/1.0.0/capabilities
  {
    "data": {
      "systemResponse": [
        "APP_ENTRY"
      ],
      "clientData": [
        "price"
      ]
    }
  }
```

### How to link with a Mix Dialog project

Go to mix and create a project using the files in the `mix.ide` folder.

Update the DRSS settings from mix.dialog.

Go to the `Try` tab and start the simulation.

### How to develop

The easiest way to develop is simply to set the Function App edit mode to `Read/Write` and develop directly in the Azure web code editor.
