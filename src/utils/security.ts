import { UAParser } from "ua-parser-js";
import { hash as bcryptHash, compare as bcryptCompare } from "bcryptjs"; // 改用 bcryptjs
import { headers } from "next/headers";

export class SecurityService {
  static async hashPassword(password: string): Promise<string> {
    return await bcryptHash(password, 10);
  }

  static async verifyPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcryptCompare(password, hash);
  }

  static async generateFingerprint() {
    const headersList = await headers();
    const parser = new UAParser(headersList.get("user-agent")!);
    const data = {
      userAgent: parser.getResult(),
      language: headersList.get("accept-language"),
      platform: parser.getOS().name,
    };

    return crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(JSON.stringify(data)))
      .then((hash) => {
        return Array.from(new Uint8Array(hash))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
      });
  }

  static async getClientInfo() {
    const headersList = await headers();
    return {
      ip: headersList.get("x-forwarded-for") ?? "unknown",
      userAgent: headersList.get("user-agent") ?? "unknown",
      fingerprint: await this.generateFingerprint(),
    };
  }
}
