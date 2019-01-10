# CI/CD Strategy

In order to have high quality code for your domain we suggest that you use the following Continuous Integration/Continuous delivery method.

First you should create (or have access) to one Function Apps per runtime environment and one Function App for your Mix IDE namespace (either your company or your own user).
Secondly because of the strict structure and cumbersome setup of an Azure Function (subscription, location, etc.) we highly suggest you use only one Function App for all your domains.

The general approach to the Continuous Delivery we highly suggest is to have each Function Apps track specific branch and push to these branches in a Git Flow manner when doing the build promotion inside the Mix IDE.

## Concrete example
Here an example of the propose flow:

A Mix IDE user create the domain `GPS_Navigation` and use scripts to resolve point of interests via the client data `POINTS_OF_INTERESTS`.
Inside the company namespace Function App the user create the function `gps_navigation-CD-POINTS_OF_INTERESTS` and write the appropriate JavaScript code to resolve the client data.

After testing in the Mix IDE simulator the user copy/paste the function code into in local git repository and create a merge request to merge into the branch `qa`.
A user does the code review and merge into the `qa` branch. The first runtime environment `nuance_qa_east_america` is set to track branch `qa` so the Function App code is automatically updated.

A Mix IDE Quality Assurance user test in the runtime environment and is satisfied with the integration. He then create a merge request from `qa` to `master`. Once the code is merge he then approve the build to be promoted into `nuance_prod_east_america` and `nuance_prod_europe_central`.

The production environment is then running the new domain with the new script to resolve the point of interests.

## How to update scripting without breaking older domains?

If you want to have two version of the same domain running in the Function App as is the suggested approach.
You should add the version to the HTTP function name that you create and specify the version in the `route` property inside the `function.json` properties file of the function.

```


