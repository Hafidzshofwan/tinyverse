import type { Metadata } from "next";
import { AdminTryoutDashboard } from "@/widgets/admin-tryout-dashboard";

export const metadata: Metadata = {
  title: "Dashboard Tryout — Admin",
  description:
    "Statistik agregat hasil tryout CBT UKNPDPD seluruh pengguna.",
  robots: { index: false, follow: false },
};

export default function HalamanDashboardTryout() {
  return <AdminTryoutDashboard />;
}
