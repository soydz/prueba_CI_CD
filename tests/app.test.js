import request from "supertest";
import app from "../index.js";

describe("GET /", () => {
  it("responde con un mensaje", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("🚀 Hola CI/CD con Node.js!");
  });
});
