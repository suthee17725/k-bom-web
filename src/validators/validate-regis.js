import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกชื่อ",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกนามสกุล",
  }),
  phoneNumber: Joi.string()
    .pattern(new RegExp("^[0-9]{10}$"))
    .required()
    .messages({
      "string.empty": "กรุณากรอกหมายเลขโทรศัพท์",
      "string.pattern.base":
        "หมายเลขโทรศัพท์จะต้องเป้นหมายเลขและมีจำนวน 10 หลัก",
    }),
  email: Joi.string().email({ tlds: false }).messages({
    "string.empty": "กรุณากรอกอีเมล",
    "string.email": "รูปแบบอีเมลไม่ถูกต้อง",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณากรอกรหัสผ่าน",
      "string.pattern.base":
        "รหัสผ่านต้องมีอย่างน้อย 6 ตัว แต่ไม่เกิน 30 ตัว และเป็นตัวเลขหรือตัวอักษรภาษาอังกฤษเท่านั้น",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "รหัสผ่านไม่ตรงกัน",
    "string.empty": "กรุณากรอกยืนยันรหัสผ่าน",
  }),
});
const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateRegister;
