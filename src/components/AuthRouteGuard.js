"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  CANDIDATE_PROTECTED_PREFIXES,
  EMPLOYER_PROTECTED_PREFIXES,
  ROLE_DEFAULT_ROUTE,
} from "@/constants/panelConfig";

const isInProtectedGroup = (pathname, prefixes) =>
  prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

const AuthRouteGuard = () => {
  const pathname = usePathname();
  const router = useRouter();
  const role = useSelector((state) => state.auth.user?.role);

  useEffect(() => {
    if (!pathname) return;

    const isCandidateRoute = isInProtectedGroup(pathname, CANDIDATE_PROTECTED_PREFIXES);
    const isEmployerRoute = isInProtectedGroup(pathname, EMPLOYER_PROTECTED_PREFIXES);
    const isProtectedRoute = isCandidateRoute || isEmployerRoute;

    if (!isProtectedRoute) return;

    if (!role) {
      router.replace("/Login");
      return;
    }

    if (role === "candidate" && isEmployerRoute) {
      router.replace(ROLE_DEFAULT_ROUTE.candidate);
      return;
    }

    if (role === "employer" && isCandidateRoute) {
      router.replace(ROLE_DEFAULT_ROUTE.employer);
    }
  }, [pathname, role, router]);

  return null;
};

export default AuthRouteGuard;
