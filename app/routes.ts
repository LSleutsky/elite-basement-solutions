import { index, layout, route, RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./layout/main.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("commercial", "./routes/commercial.tsx"),
    route("contact", "./routes/contact.tsx"),
    route("basement-renovations", "./routes/basement-renovations.tsx"),
    route("mold-remediation", "./routes/mold-remediation.tsx"),
    route("projects", "./routes/projects.tsx"),
    route("residential", "./routes/residential.tsx"),
    route("resources", "./routes/resources.tsx"),
    route("services", "./routes/services.tsx"),
    route("service-areas", "./routes/service-areas.tsx"),
    route("waterproofing", "./routes/waterproofing.tsx")
  ])
] satisfies RouteConfig;
