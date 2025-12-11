import { index, layout, route, RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./layout/main.tsx", [
    index("./routes/home.tsx"),
    route("waterproofing", "./routes/waterproofing.tsx"),
    route("mold-remediation", "./routes/mold-remediation.tsx")
  ])
] satisfies RouteConfig;
