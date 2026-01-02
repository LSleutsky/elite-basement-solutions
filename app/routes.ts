import { index, layout, route, RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./layout/main.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("home-remodeling", "./routes/home-remodeling.tsx"),
    route("mold-remediation", "./routes/mold-remediation.tsx"),
    route("resources", "./routes/resources.tsx"),
    route("service-areas", "./routes/service-areas.tsx"),
    route("services", "./routes/services.tsx"),
    route("waterproofing", "./routes/waterproofing.tsx")
  ])
] satisfies RouteConfig;
