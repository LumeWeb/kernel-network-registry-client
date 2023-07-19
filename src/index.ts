import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduFYRFUur1hBiW1u18dqQsn2w7AiQhBmgd7PiXsX71AtAJHykhNXsUUpw";

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
}

export const createClient = factory<NetworkRegistryClient>(
  NetworkRegistryClient,
  MODULE,
);
