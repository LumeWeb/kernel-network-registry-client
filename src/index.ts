import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduMgd8vcBUkzxGbqTe14aA5bUvhTnmpK36LPGWFZFb95yeouDDV2NnHu1";

export class NetworkRegistryClient extends Client {
  public async registerType(name: string) {
    return this.callModuleReturn("registerType", name);
  }

  public async getTypes() {
    return this.callModuleReturn("getTypes");
  }

  public async getNetworkTypes(module: string) {
    return this.callModuleReturn("getNetworkTypes", { module });
  }

  public async registerNetwork(types: string[]) {
    return this.callModuleReturn("registerNetwork", { types });
  }

  public async getNetworksByType(type: string) {
    return this.callModuleReturn("getNetworksByType", { type });
  }
}

export const createClient = factory<NetworkRegistryClient>(
  NetworkRegistryClient,
  MODULE,
);
