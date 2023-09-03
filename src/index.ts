import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zdiSKKUg6bwkR3wRsSSzNF8F46y2imRq2LenVh6yyPgkb7AHqz7YK6kzTH";

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
