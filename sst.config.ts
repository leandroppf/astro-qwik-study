import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config(input) {
    return {
      name: "astro-qwik",
      region: "us-east-1",
      profile:
        input.stage === "production" ? "leandroppf-prod" : "leandroppf-dev",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site");
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
