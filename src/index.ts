import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "z3o47gPWZfmPSQYSkbJzfekvzBHsg9AKTQD6vDbARhgPUgw2h2Skt3PabuGj";

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
