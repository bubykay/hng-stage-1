import ApiService from "../services/ApiService.js";
import { NumberProperties } from "../services/NumberPropertiesService.js";

class APIController {
  async classifyNumber(req, res) {
    try {
      const { number } = req.query;

      if (number === undefined || number.trim() === "") {
        return res.status(400).json({ error: true, number });
      }

      const trimmedNumber = number.trim();

      const validIntegerRegex = /^-?\d+$/;
      if (!validIntegerRegex.test(trimmedNumber)) {
        return res.status(400).json({ error: true, number: trimmedNumber });
      }

      const cleanNumber = Number(trimmedNumber);

      if (isNaN(cleanNumber)) {
        return res.status(400).json({ error: true, number: trimmedNumber });
      }

      const numberProperties = new NumberProperties(cleanNumber);

      const { text } = await ApiService.get(`/${cleanNumber}/math?json`);

      res.json({
        number: cleanNumber,
        is_prime: numberProperties.isPrime(),
        is_perfect: numberProperties.isPerfectSquare(),
        properties: [
          numberProperties.isArmstrong() ? "armstrong" : null,
          numberProperties.isOdd() ? "odd" : null,
          numberProperties.isEven() ? "even" : null,
        ].filter(Boolean),
        digit_sum: numberProperties.digitsSum(),
        fun_fact: text,
      });
    } catch (error) {
      console.error("Error in classifyNumber:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new APIController();
