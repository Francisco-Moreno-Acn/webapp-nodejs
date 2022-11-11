@minLength(3)
@maxLength(24)
param storageName string ='storagedevops'
param webAppName string = 'webappdevops'
param sku string = 'F1'
param location string = 'eastus2'
var appServicePlanName = 'asp-devops'

resource ExampleStorageDemo 'Microsoft.Storage/storageAccounts@2021-02-01' = {
  name: storageName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}

resource appServicePlan 'Microsoft.Web/serverfarms@2020-12-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: sku
  }
}

resource appService 'Microsoft.Web/sites@2020-06-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
  }
}

output webappnameid string = webAppName 
