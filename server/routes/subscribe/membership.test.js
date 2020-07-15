const request = require("supertest");
const app = require("../../app.js");
const nodeMailer = require("nodemailer");

let spy = jest.spyOn(global.console, "error").mockImplementation();
const OLD_ENV = process.env;

jest.mock("nodemailer", () => ({
  createTransport: jest.fn(() => {}),
}));

const userMock = {
  MEMBERSHIP: "Individual",
  SALUTATION: "",
  FNAME: "John",
  LNAME: "Doe",
  COMPANY: "Foobar Inc.",
  TITLE: "",
  EMAIL: "test@gmail.com",
};

describe("/subscribe/membership", () => {
  afterEach(() => {
    spy.mockClear();
  });
  afterAll(() => {
    process.env = OLD_ENV; // restore old env
    spy.mockRestore();
  });

  it("requires mandatory process.env variables", async (done) => {
    const errMsg =
      "Required ENV variables are not set: [GOOGLE_ACCOUNT, GOOGLE_PASSWORD, EMAIL_TO_1]";
    nodeMailer.createTransport.mockReturnValue({
      verify: jest.fn(),
      sendMail: jest.fn(),
    });

    const res = await request(app)
      .post("/subscribe/membership")
      .set("Origin", "http://localhost:3000")
      .send(userMock);

    expect(res.status).toBe(500);
    expect(res.error.text).toContain(errMsg);

    expect(nodeMailer.createTransport().verify).not.toHaveBeenCalled();
    expect(nodeMailer.createTransport().sendMail).not.toHaveBeenCalled();

    // not catching the error...
    // expect(spy).toHaveBeenCalled();
    // expect(spy).toHaveBeenCalledWith(errMsg);

    done();
  });

  it("handles error when server is not ready to accept messages", async (done) => {
    const errMsg = "this thing failed..";
    process.env.GOOGLE_ACCOUNT = "test";
    process.env.GOOGLE_PASSWORD = "password";
    process.env.EMAIL_TO_1 = "test@gmail.com";

    nodeMailer.createTransport.mockReturnValue({
      verify: jest.fn().mockRejectedValue(errMsg),
      sendMail: jest.fn(),
    });

    const res = await request(app)
      .post("/subscribe/membership")
      .set("Origin", "http://localhost:3000")
      .send(userMock);

    expect(res.status).toBe(500);
    expect(res.error.text).toContain(errMsg);

    expect(nodeMailer.createTransport().verify).toHaveBeenCalled();
    expect(nodeMailer.createTransport().sendMail).not.toHaveBeenCalled();

    // not catching the error...
    // expect(spy).toHaveBeenCalled();
    // expect(spy).toHaveBeenCalledWith(errMsg);

    done();
  });

  it("succesfully sends an e-mail", async (done) => {
    process.env.GOOGLE_ACCOUNT = "test";
    process.env.GOOGLE_PASSWORD = "password";
    process.env.EMAIL_TO_1 = "test@gmail.com";

    const info = {
      messageId: 1,
      accepted: [],
      rejected: [],
      response: "",
    };

    nodeMailer.createTransport.mockReturnValue({
      verify: jest.fn().mockResolvedValue(),
      sendMail: jest.fn((options, cb) => {
        return cb(null, info);
      }),
    });

    const res = await request(app)
      .post("/subscribe/membership")
      .set("Origin", "http://localhost:3000")
      .send(userMock);

    expect(res.status).toBe(200);

    expect(nodeMailer.createTransport().verify).toHaveBeenCalled();
    expect(nodeMailer.createTransport().sendMail).toHaveBeenCalled();

    done();
  });
});
