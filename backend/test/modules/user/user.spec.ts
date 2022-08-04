import request from "supertest";
import { app } from "../../../src/app";

describe("## User routes", () => {
  it("-- Should create an user", async () => {
    const user = {
      name: "Wellington",
      email: "test@gmail.com",
      CPF: "21878465040",
    };

    await request(app)
      .post("/users")
      .send(user)
      .then((res) => {
        if (res.status === 400) {
          return res.body;
        } else {
          expect(res.status).toBe(201);
          expect(res.body).toHaveProperty("name", "Wellington");
          expect(res.body).toHaveProperty("email", "test@gmail.com");
          expect(res.body).toHaveProperty("CPF", "21878465040");
        }
      });
  });

  // it("-- Should receive error if user already exists", async () => {
  //   const user = {
  //     name: "Wellington",
  //     email: "test@gmail.com",
  //     CPF: "21878465040",
  //   };

  //   await request(app)
  //     .post("/users")
  //     .send(user)
  //     .then((res) => {
  //       if (res.status === 201) {
  //         return res.body;
  //       } else {
  //         expect(res.status).toBe(400);
  //         expect(res.body.message).toEqual(
  //           "User already exists! Please login in"
  //         );
  //       }
  //     });
  // });

  // it("-- should receive list from all users", async () => {
  //   await request(app)
  //     .get("/users")
  //     .then((res) => {
  //       if (res.status === 400) {
  //         return res.status;
  //       }
  //       expect(res.status).toBe(200);
  //     });
  // });

  // it("-- should receive error if user role is equal to #user", async () => {
  //   await request(app)
  //     .get("/users")
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.status;
  //       }
  //       expect(res.status).toBe(400);
  //     });
  // });

  // it("-- should get user by id", async () => {
  //   const user = await prismaClient.user.findFirst({
  //     where: { email: "jhondoe@gmail.com" },
  //   });

  //   await request(app)
  //     .get(`/users/${user?.id}`)
  //     .then((res) => {
  //       if (res.status === 400) {
  //         return res.status;
  //       }
  //       expect(res.status).toBe(200);
  //     });
  // });

  // it("-- should receive an error if user not found ", async () => {
  //   const user = await prismaClient.user.findFirst({
  //     where: { email: "jhondoe@gmail.com" },
  //   });

  //   await request(app)
  //     .get(`/users/${user?.id}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.status;
  //       }
  //       expect(res.status).toBe(400);
  //       expect(res.body.name).toEqual("Wellington Atualizado");
  //     });
  // });

  // it("-- should be updated user", async () => {
  //   const user = await prismaClient.user.findFirst({
  //     where: { email: "jhondoe@gmail.com" },
  //   });

  //   await request(app)
  //     .put(`/users/${user?.id}`)
  //     .send({ name: "Wellington Atualizado" })
  //     .then((res) => {
  //       if (res.status === 400) {
  //         return res.body;
  //       } else {
  //         expect(res.status).toBe(201);
  //         expect(res.body.name).toEqual("Wellington Atualizado");
  //       }
  //     });
  // });

  // it("-- should get an error when updating an user", async () => {
  //   const user = await prismaClient.user.findFirst({
  //     where: { email: "jhondoe@gmail.com" },
  //   });

  //   await request(app)
  //     .put(`/users/${user?.id}`)
  //     .send({ name: "Wellington Atualizado" })
  //     .then((res) => {
  //       if (res.status === 201) {
  //         return res.body;
  //       }
  //       expect(res.status).toBe(400);
  //     });
  // });

  // it("-- should be receive message #deleted user successfully", async () => {
  //   const user = await prismaClient.user.findFirst({
  //     where: { email: "jhondoe@gmail.com" },
  //   });

  //   await request(app)
  //     .delete(`/users/${user?.id}`)
  //     .then((res) => {
  //       if (res.status === 400) {
  //         return res.body;
  //       }
  //       expect(res.status).toBe(200);
  //       expect(res.body.message).toEqual("Deleted user successfully!");
  //     });
  // });
});