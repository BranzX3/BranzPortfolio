import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import * as portfolioData from "@/data/portfolio";

export async function GET() {
  try {
    // Return the currently loaded portfolio data
    return NextResponse.json({
      siteConfig: portfolioData.siteConfig,
      socialLinks: portfolioData.socialLinks,
      aboutMe: portfolioData.aboutMe,
      skills: portfolioData.skills,
      projects: portfolioData.projects,
      experience: portfolioData.experience,
      education: portfolioData.education,
      certifications: portfolioData.certifications,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to retrieve portfolio data" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic structure check
    if (
      !data.siteConfig ||
      !data.socialLinks ||
      !data.aboutMe ||
      !data.skills ||
      !data.projects ||
      !data.experience ||
      !data.education ||
      !data.certifications
    ) {
      return NextResponse.json(
        { error: "Invalid data structure. Missing required portfolio sections." },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "src", "data", "portfolio.ts");

    // Format fields beautifully as valid TypeScript
    const fileContent = `// ============================================================
//  🎯 PORTFOLIO DATA — แก้ไขข้อมูลของคุณที่นี่ (อัปเดตผ่านระบบ Admin)
// ============================================================

export const siteConfig = ${JSON.stringify(data.siteConfig, null, 2)};

export const socialLinks: {
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
} = ${JSON.stringify(data.socialLinks, null, 2)};

export const aboutMe = ${JSON.stringify(data.aboutMe, null, 2)};

export const skills = ${JSON.stringify(data.skills, null, 2)};

export const projects = ${JSON.stringify(data.projects, null, 2)};

export const experience = ${JSON.stringify(data.experience, null, 2)};

export const education = ${JSON.stringify(data.education, null, 2)};

export const certifications = ${JSON.stringify(data.certifications, null, 2)};
`;

    // Write file back to the project root path
    fs.writeFileSync(filePath, fileContent, "utf-8");

    return NextResponse.json({ success: true, message: "Portfolio saved successfully" });
  } catch (error: any) {
    console.error("Error saving portfolio data:", error);
    return NextResponse.json(
      { error: error.message || "Failed to save portfolio data" },
      { status: 500 }
    );
  }
}
