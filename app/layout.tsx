import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"EcoLearn | Next.js App Router",description:"Day 6 multi-page App Router learning application"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><header className="shell"><nav className="nav"><strong>EcoLearn</strong><a href="/">Home</a><a href="/about">About</a><a href="/courses">Courses</a></nav></header><main className="shell">{children}</main><footer className="shell">Day 06 · Shared root layout</footer></body></html>}
