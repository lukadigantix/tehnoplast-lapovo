import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // sve rute osim API-ja, Next internih i fajlova sa ekstenzijom (slike, video, pdf)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
