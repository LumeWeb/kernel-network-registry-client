import { Client, factory } from "@lumeweb/libkernel/module";
import type { DataFn } from "@lumeweb/libkernel";

const MODULE = "zdiVGkiECt8CT7psN5wsQyNHewyRJLjPhAGwYGTRXPyAPXP21bdupzHyaw";

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
  public subscribeToUpdates(cb: () => void): DataFn {
    const [stop] = this.connectModule("subscribeToUpdates", undefined, cb);

    return stop;
  }
}

export const createClient = factory<NetworkRegistryClient>(
  NetworkRegistryClient,
  MODULE,
);
