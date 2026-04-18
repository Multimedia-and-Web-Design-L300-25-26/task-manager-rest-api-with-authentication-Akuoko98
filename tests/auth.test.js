import { jest } from "@jest/globals";
import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/config/db.js";

dotenv.config();

// Standardizing timeout for database-heavy operations
jest.setTimeout(70000);

beforeAll(async () => {
  await connectDB();

  // CLEANUP: Remove the test user before starting
  // This prevents "User already exists" errors on subsequent runs
  if (mongoose.connection.collections.users)
{

     await mongoose.connection.collections.users.deleteMany({ email:
      "test@example.com" });
 }
});

afterAll(async () => {
  // Final cleanup (optional) and closing connection
  await mongoose.connection.close();
});

describe("Auth Routes", () => {
 let token;

  it("should register a user", async () =>
     {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "123456"
      });

    // Check if your API returns 201 (Created) or 200 (OK)
   expect(res.statusCode).toBe(201);
   expect(res.body.email).toBe("test@example.com");
  });

   it("should login user and return token",
async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@example.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(200);

expect(res.body.token).toBeDefined();
   token = res.body.token;
  });

});

